/* Renders window.NEWS (see news-data.js) into any element marked
   data-news. Add data-news-limit="3" to show only the newest few. */
(function () {
  var mounts = document.querySelectorAll('[data-news]');
  if (!mounts.length) return;

  // Prefix a root-relative asset path ("imgs/...") with the deploy base path
  // (e.g. "/website") so images resolve on every page regardless of its depth.
  function asset(src) {
    if (/^(?:[a-z]+:)?\/\//i.test(src) || src.charAt(0) === '/') return src;
    var base = (window.BASE_URL || '/').replace(/\/$/, '');
    return base + '/' + src;
  }
  window.NEWS_ASSET = asset;

  // Titles may contain inline HTML (e.g. <em>); labels and captions need the
  // plain text.
  function plain(html) {
    return new DOMParser().parseFromString(html, 'text/html').body.textContent;
  }
  window.NEWS_PLAIN = plain;

  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /* Lightbox — built once, on first use. */
  var lightbox = (function () {
    var el, imgEl, capEl, prevBtn, nextBtn, set = [], at = 0, opener = null;

    function icon(d) {
      return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>';
    }

    function build() {
      el = document.createElement('div');
      el.className = 'lightbox';
      el.setAttribute('role', 'dialog');
      el.setAttribute('aria-modal', 'true');
      el.innerHTML =
        '<button class="lightbox-close" type="button" aria-label="Close">' + icon('M6 6 L18 18 M18 6 L6 18') + '</button>' +
        '<button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous photo">' + icon('M15 4 L7 12 L15 20') + '</button>' +
        '<button class="lightbox-nav lightbox-next" type="button" aria-label="Next photo">' + icon('M9 4 L17 12 L9 20') + '</button>' +
        '<figure><img alt="" /><figcaption></figcaption></figure>';
      document.body.appendChild(el);

      imgEl = el.querySelector('img');
      capEl = el.querySelector('figcaption');
      prevBtn = el.querySelector('.lightbox-prev');
      nextBtn = el.querySelector('.lightbox-next');

      el.querySelector('.lightbox-close').addEventListener('click', close);
      prevBtn.addEventListener('click', function () { step(-1); });
      nextBtn.addEventListener('click', function () { step(1); });
      // Backdrop click closes; clicks on the image itself do not.
      el.addEventListener('click', function (e) { if (e.target === el) close(); });
      document.addEventListener('keydown', function (e) {
        if (!el.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') step(-1);
        else if (e.key === 'ArrowRight') step(1);
      });
    }

    function render() {
      var pic = set[at];
      imgEl.src = asset(pic.src);
      imgEl.alt = pic.alt || '';
      capEl.textContent = set.length > 1
        ? capTitle + ' · ' + (at + 1) + ' / ' + set.length
        : capTitle;
      var many = set.length > 1;
      prevBtn.hidden = !many;
      nextBtn.hidden = !many;
    }

    function step(d) { at = (at + d + set.length) % set.length; render(); }

    function close() {
      el.classList.remove('is-open');
      document.body.style.overflow = '';
      if (opener) { opener.focus(); opener = null; }
    }

    var capTitle = '';

    return {
      open: function (images, index, title) {
        if (!el) build();
        set = images; at = index; capTitle = title || '';
        opener = document.activeElement;
        render();
        el.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        el.querySelector('.lightbox-close').focus();
      }
    };
  })();

  // Shared so the news gallery (below) can reuse the same viewer.
  window.NEWS_LIGHTBOX = lightbox;

  // Newest first. ISO dates sort correctly as plain strings; a month-only
  // date ("2026-07") is treated as the start of that month.
  var items = (window.NEWS || []).slice().sort(function (a, b) {
    return sortKey(b.date).localeCompare(sortKey(a.date));
  });

  function sortKey(iso) { return iso.length === 7 ? iso + '-00' : iso; }

  var MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];

  function dateChip(iso) {
    var parts = iso.split('-');
    var month = MONTHS[parseInt(parts[1], 10) - 1];
    var time = document.createElement('time');
    time.className = 'timeline-date';
    time.setAttribute('datetime', iso);

    var when = document.createElement('span');
    // "2026-07" renders as just the month; "2026-07-08" adds the day.
    when.textContent = parts.length === 2 ? month : parseInt(parts[2], 10) + ' ' + month;

    var year = document.createElement('b');
    year.textContent = parts[0];

    time.appendChild(when);
    time.appendChild(year);
    return time;
  }

  /* When items are grouped under month headings the year is already stated
     there, so a chip is only worth showing for day-precision dates. */
  function dayChip(iso) {
    var parts = iso.split('-');
    if (parts.length === 2) return null;
    var time = document.createElement('time');
    time.className = 'timeline-date timeline-date--day';
    time.setAttribute('datetime', iso);
    var when = document.createElement('span');
    when.textContent = parseInt(parts[2], 10) + ' ' + MONTHS[parseInt(parts[1], 10) - 1];
    time.appendChild(when);
    return time;
  }

  function monthMarker(key) {
    var parts = key.split('-');
    var li = document.createElement('li');
    li.className = 'timeline-month';
    li.textContent = MONTHS_LONG[parseInt(parts[1], 10) - 1] + ' ' + parts[0];
    return li;
  }

  function buildItem(item, grouped) {
      var li = document.createElement('li');

      var head = document.createElement('div');
      head.className = 'timeline-head';
      var chip = grouped ? dayChip(item.date) : dateChip(item.date);
      if (chip) head.appendChild(chip);

      var title = document.createElement('h3');
      title.innerHTML = item.title;
      head.appendChild(title);
      li.appendChild(head);

      if (item.body) {
        var body = document.createElement('p');
        // Authored content — HTML is intentional so items can link out.
        body.innerHTML = item.body;
        li.appendChild(body);
      }

      if (item.images && item.images.length) {
        var media = document.createElement('div');
        media.className = 'timeline-media';
        item.images.forEach(function (pic, i) {
          var btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'timeline-thumb';
          btn.setAttribute('aria-label',
            'Open photo ' + (i + 1) + ' of ' + item.images.length + ' — ' + plain(item.title));
          btn.addEventListener('click', function () {
            lightbox.open(item.images, i, plain(item.title));
          });

          var img = document.createElement('img');
          img.src = asset(pic.src);
          img.alt = pic.alt || '';
          img.loading = 'lazy';

          btn.appendChild(img);
          media.appendChild(btn);
        });
        li.appendChild(media);
      }

      return li;
  }

  mounts.forEach(function (mount) {
    var limit = parseInt(mount.getAttribute('data-news-limit'), 10);
    var collapseAfter = parseInt(mount.getAttribute('data-news-collapse'), 10);
    var grouped = mount.hasAttribute('data-news-months');
    var shown = limit > 0 ? items.slice(0, limit) : items;

    var list = document.createElement('ul');
    list.className = 'timeline';

    // Track month groups so a heading can be hidden when all of its items are.
    var groups = [];
    var lastKey = null;

    shown.forEach(function (item) {
      var key = item.date.slice(0, 7);
      if (!groups.length || (grouped && key !== lastKey)) {
        var marker = grouped ? monthMarker(key) : null;
        if (marker) list.appendChild(marker);
        groups.push({ marker: marker, items: [] });
        lastKey = key;
      }
      var li = buildItem(item, grouped);
      list.appendChild(li);
      groups[groups.length - 1].items.push(li);
    });

    mount.appendChild(list);

    if (!(collapseAfter > 0) || shown.length <= collapseAfter) return;

    // Reveal earlier news a page at a time rather than all at once, so the
    // button stays a short step instead of dumping the whole archive.
    var PAGE = collapseAfter;
    var visible = collapseAfter;

    function apply() {
      var i = 0;
      groups.forEach(function (g) {
        var anyVisible = false;
        g.items.forEach(function (li) {
          var hide = i >= visible;
          li.hidden = hide;
          if (!hide) anyVisible = true;
          i++;
        });
        if (g.marker) g.marker.hidden = !anyVisible;
      });

      var all = visible >= shown.length;
      toggle.setAttribute('aria-expanded', String(visible > collapseAfter));
      label.textContent = all ? 'Show less' : 'Show more';
      chev.textContent = all ? '▴' : '▾';
      // Only offer "back to top" once the list has actually grown.
      top.hidden = visible <= collapseAfter;
    }

    var more = document.createElement('div');
    more.className = 'timeline-more';

    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'timeline-toggle';
    var label = document.createElement('span');
    var chev = document.createElement('span');
    chev.className = 'chev';
    chev.setAttribute('aria-hidden', 'true');
    chev.textContent = '▾';
    toggle.appendChild(label);
    toggle.appendChild(chev);

    var top = document.createElement('button');
    top.type = 'button';
    top.className = 'link-arrow timeline-top';
    top.innerHTML = 'Back to top <span class="arrow" aria-hidden="true">↑</span>';

    toggle.addEventListener('click', function () {
      if (visible >= shown.length) {
        // Everything is out — this press collapses back to the first page.
        visible = collapseAfter;
        apply();
        // Collapsing from far down the list would leave the viewport stranded.
        more.scrollIntoView({ block: 'center' });
        return;
      }
      var flat = groups.reduce(function (acc, g) { return acc.concat(g.items); }, []);
      var firstNew = flat[visible] || null;
      visible = Math.min(visible + PAGE, shown.length);
      apply();
      // Keep the newly revealed items in view; the button moves down the page.
      if (firstNew) firstNew.scrollIntoView({ block: 'nearest' });
    });
    top.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    more.appendChild(toggle);
    more.appendChild(top);
    mount.appendChild(more);
    apply();
  });
})();
