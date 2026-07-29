/* Crossfading slideshow. Drives every .slideshow on the page. */
(function () {
  var DELAY = 5000;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.slideshow').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.slideshow-track img'));
    var dotsBox = root.querySelector('.slideshow-dots');
    if (slides.length < 2) return;

    var index = 0;
    var timer = null;
    var inView = false;

    var dots = slides.map(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', 'Show photo ' + (i + 1) + ' of ' + slides.length);
      dot.addEventListener('click', function () { show(i); restart(); });
      dotsBox.appendChild(dot);
      return dot;
    });

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (img, i) { img.classList.toggle('is-active', i === index); });
      dots.forEach(function (dot, i) { dot.setAttribute('aria-current', String(i === index)); });
    }

    function restart() {
      clearInterval(timer);
      if (!still && inView) timer = setInterval(function () { show(index + 1); }, DELAY);
    }

    root.querySelector('.slideshow-arrow--prev').addEventListener('click', function () { show(index - 1); restart(); });
    root.querySelector('.slideshow-arrow--next').addEventListener('click', function () { show(index + 1); restart(); });

    // Don't advance under the cursor or while the tab is hidden.
    root.addEventListener('mouseenter', function () { clearInterval(timer); });
    root.addEventListener('mouseleave', restart);
    document.addEventListener('visibilitychange', function () {
      document.hidden ? clearInterval(timer) : restart();
    });

    // Only auto-advance while the slideshow is scrolled into view.
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        inView ? restart() : clearInterval(timer);
      }, { threshold: 0.35 }).observe(root);
    } else {
      inView = true;
    }

    show(0);
    restart();
  });
})();
