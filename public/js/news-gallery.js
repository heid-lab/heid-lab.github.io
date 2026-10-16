/* Renders a coverflow-style photo carousel into any [data-news-gallery]
   element. It gathers every image across window.NEWS so the gallery grows
   automatically as news items are added — nothing to maintain here.

   One photo is in focus (large, centered, bright); its neighbors fan out
   behind it, smaller and dimmed. Arrows / drag / trackpad swipe / arrow-keys
   move the focus, clicking a dimmed photo brings it to the middle, and
   clicking the focused photo opens the shared lightbox. */
(function () {
  var mount = document.querySelector('[data-news-gallery]');
  if (!mount) return;

  // Reuse the base-path prefixer from news.js; fall back to identity so the
  // gallery still works if loaded standalone.
  var asset = window.NEWS_ASSET || function (s) { return s; };
  var plain = window.NEWS_PLAIN || function (s) { return s; };

  function sortKey(iso) { return iso.length === 7 ? iso + '-00' : iso; }

  // Always lead with the poster photo, then every news image, newest first.
  var pics = [
    { src: 'imgs/group/web/sel-7.jpg', alt: 'Three Heid Lab members posing in front of their research posters', title: 'Check out our posters!' }
  ];
  (window.NEWS || [])
    .slice()
    .sort(function (a, b) { return sortKey(b.date).localeCompare(sortKey(a.date)); })
    .forEach(function (item) {
      (item.images || []).forEach(function (pic) {
        pics.push({ src: pic.src, alt: pic.alt || plain(item.title), title: plain(item.title), credit: pic.credit });
      });
    });

  if (!pics.length) return;

  // How many photos fan out on each side of the focused one.
  var SPREAD = 3;
  var active = 0;

  var stage = document.createElement('div');
  stage.className = 'gallery-stage';

  var slides = pics.map(function (pic, i) {
    var slide = document.createElement('button');
    slide.type = 'button';
    slide.className = 'gallery-slide';
    slide.setAttribute('aria-label',
      'Photo ' + (i + 1) + ' of ' + pics.length + ' — ' + pic.title);
    slide.addEventListener('click', function () {
      if (dragged) return;                 // Ignore the click ending a drag.
      if (i === active) {                  // Focused photo → open it large.
        if (window.NEWS_LIGHTBOX) window.NEWS_LIGHTBOX.open(pics, i, pic.title);
      } else {
        go(i);                             // A neighbor → bring it to focus.
      }
    });

    var img = document.createElement('img');
    img.src = asset(pic.src);
    img.alt = pic.alt;
    img.loading = 'lazy';
    img.draggable = false;

    slide.appendChild(img);
    stage.appendChild(slide);
    return slide;
  });

  function layout() {
    slides.forEach(function (slide, i) {
      var offset = i - active;
      var abs = Math.abs(offset);
      // Photos beyond the spread pile up underneath the outermost one, like a
      // deck at each end: leaving photos slide onto the pile, arriving ones
      // are dealt off it. (Not display:none, so they can still animate.)
      slide.style.setProperty('--i', Math.max(-SPREAD, Math.min(SPREAD, offset)));
      slide.style.zIndex = String(pics.length - abs);
      slide.classList.toggle('is-active', offset === 0);
      slide.classList.toggle('is-off', abs > SPREAD);
      slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
      slide.tabIndex = offset === 0 ? 0 : -1;
    });
    prev.classList.toggle('is-disabled', active === 0);
    next.classList.toggle('is-disabled', active === pics.length - 1);
    caption.textContent = pics[active].title +
      (pics[active].credit ? ' · Photo: © ' + pics[active].credit : '');
  }

  function go(i) {
    active = Math.max(0, Math.min(pics.length - 1, i));
    layout();
    // If a photo had keyboard focus, hand it to the new focused photo so the
    // focus ring doesn't stay behind on one that slid off to the side.
    if (stage.contains(document.activeElement)) slides[active].focus({ preventScroll: true });
  }

  function navBtn(dir, label, d) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'gallery-nav gallery-' + dir;
    b.setAttribute('aria-label', label);
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>';
    b.addEventListener('click', function () { go(active + (dir === 'next' ? 1 : -1)); });
    return b;
  }

  var prev = navBtn('prev', 'Previous photo', 'M15 4 L7 12 L15 20');
  var next = navBtn('next', 'Next photo', 'M9 4 L17 12 L9 20');

  // Pixels of drag / trackpad travel per photo. Lower = faster.
  var STEP = 70;

  // Drag / swipe left-right: the focus follows the pointer, one photo per
  // STEP px, so a long drag moves through several photos.
  var down = false, startX = 0, dragged = false;
  stage.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    down = true; dragged = false; startX = e.clientX;
  });
  stage.addEventListener('pointermove', function (e) {
    if (!down) return;
    var steps = Math.trunc((e.clientX - startX) / STEP);
    if (!steps) return;
    if (!dragged) {
      dragged = true;
      // Capture only once it's really a drag: capturing on pointerdown makes
      // the browser send the click to the stage instead of the photo, so
      // clicking a photo would do nothing.
      stage.setPointerCapture(e.pointerId);
    }
    go(active - steps);
    startX += steps * STEP;
  });
  function endDrag(e) {
    if (!down) return;
    down = false;
    try { stage.releasePointerCapture(e.pointerId); } catch (err) {}
    setTimeout(function () { dragged = false; }, 0);
  }
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  // Two-finger swipe on a trackpad (horizontal wheel), same feel as dragging.
  // Mostly-vertical scrolling is left alone so the page still scrolls past.
  var wheelX = 0, wheelIdle;
  mount.addEventListener('wheel', function (e) {
    var dx = e.deltaMode === 1 ? e.deltaX * 16 : e.deltaX;   // Lines → px.
    if (Math.abs(dx) <= Math.abs(e.deltaY)) return;
    e.preventDefault();   // Also stops the browser's swipe-to-go-back.
    clearTimeout(wheelIdle);
    wheelIdle = setTimeout(function () { wheelX = 0; }, 200);
    if (wheelX * dx < 0) wheelX = 0;   // Changed direction: start fresh.
    wheelX += dx;
    var steps = Math.trunc(wheelX / STEP);
    if (steps) {
      go(active + steps);
      wheelX -= steps * STEP;
    }
  }, { passive: false });

  // Arrow keys when the carousel has focus.
  mount.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { go(active - 1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { go(active + 1); e.preventDefault(); }
  });

  // The focused photo's news title, shown under the fan. It sits outside the
  // viewport, which clips to the photos' height.
  var caption = document.createElement('p');
  caption.className = 'gallery-caption';

  mount.appendChild(prev);
  mount.appendChild(stage);
  mount.appendChild(next);
  mount.insertAdjacentElement('afterend', caption);
  layout();
})();
