/* Renders a coverflow-style photo carousel into any [data-news-gallery]
   element. It gathers every image across window.NEWS so the gallery grows
   automatically as news items are added — nothing to maintain here.

   One photo is in focus (large, centered, bright); its neighbors fan out
   behind it, smaller and dimmed. Arrows / drag / arrow-keys move the focus,
   and clicking the focused photo opens the shared lightbox. */
(function () {
  var mount = document.querySelector('[data-news-gallery]');
  if (!mount) return;

  // Reuse the base-path prefixer from news.js; fall back to identity so the
  // gallery still works if loaded standalone.
  var asset = window.NEWS_ASSET || function (s) { return s; };
  var plain = window.NEWS_PLAIN || function (s) { return s; };

  function sortKey(iso) { return iso.length === 7 ? iso + '-00' : iso; }

  // Always lead with the group photo, then every news image, newest first.
  var pics = [
    { src: 'imgs/group/web/sel-7.jpg', alt: 'The Heid Lab group', title: 'The Heid Lab' }
  ];
  (window.NEWS || [])
    .slice()
    .sort(function (a, b) { return sortKey(b.date).localeCompare(sortKey(a.date)); })
    .forEach(function (item) {
      (item.images || []).forEach(function (pic) {
        pics.push({ src: pic.src, alt: pic.alt || plain(item.title), title: plain(item.title) });
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
      slide.style.setProperty('--i', offset);
      slide.style.zIndex = String(pics.length - abs);
      slide.classList.toggle('is-active', offset === 0);
      // Photos beyond the spread are hidden entirely (removed from the fan).
      slide.hidden = abs > SPREAD;
      slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
      slide.tabIndex = offset === 0 ? 0 : -1;
    });
    prev.classList.toggle('is-disabled', active === 0);
    next.classList.toggle('is-disabled', active === pics.length - 1);
  }

  function go(i) {
    active = Math.max(0, Math.min(pics.length - 1, i));
    layout();
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

  // Drag / swipe left-right to move the focus one photo at a time.
  var down = false, startX = 0, dragged = false;
  stage.addEventListener('pointerdown', function (e) {
    down = true; dragged = false; startX = e.clientX;
    stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener('pointermove', function (e) {
    if (!down) return;
    var dx = e.clientX - startX;
    if (Math.abs(dx) > 40 && !dragged) {   // One step per drag past the threshold.
      dragged = true;
      go(active + (dx < 0 ? 1 : -1));
    }
  });
  function endDrag(e) {
    if (!down) return;
    down = false;
    try { stage.releasePointerCapture(e.pointerId); } catch (err) {}
    setTimeout(function () { dragged = false; }, 0);
  }
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  // Arrow keys when the carousel has focus.
  mount.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { go(active - 1); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { go(active + 1); e.preventDefault(); }
  });

  mount.appendChild(prev);
  mount.appendChild(stage);
  mount.appendChild(next);
  layout();
})();
