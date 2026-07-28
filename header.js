/* Condenses the sticky header once the page is scrolled. */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;

  var THRESHOLD = 40;
  var ticking = false;

  function update() {
    header.classList.toggle('is-scrolled', window.scrollY > THRESHOLD);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  update();
})();
