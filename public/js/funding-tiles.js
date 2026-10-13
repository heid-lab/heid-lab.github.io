/* Research page funding tiles. Each tile shows a funder's logo and grant name;
   its details (funder, period, amount, link) appear on hover via CSS on devices
   that can hover, and a click or tap pins them open here. One tile is pinned at
   a time; a click elsewhere, Escape, or following a tile's link closes it, and
   tiles reset when the visitor returns to the page. Without JS, hover still
   works and the details stay reachable by keyboard (see .funding-tile in
   style.css). */
(function () {
  var tiles = Array.prototype.slice.call(document.querySelectorAll('.funding-tile'));
  if (!tiles.length) return;

  function setOpen(tile, open) {
    tile.classList.toggle('is-open', open);
    tile.querySelector('.funding-tile-face').setAttribute('aria-expanded', String(open));
  }

  function closeAll() {
    tiles.forEach(function (t) { setOpen(t, false); });
  }

  tiles.forEach(function (tile) {
    tile.addEventListener('click', function (e) {
      // Links inside the open details navigate as usual; the tile un-pins so
      // it isn't still open when the visitor comes back.
      if (e.target.closest('a')) { closeAll(); return; }
      var open = !tile.classList.contains('is-open');
      closeAll();
      setOpen(tile, open);
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.funding-tile')) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });
  // Back/forward navigation can restore the page as it was left (bfcache).
  window.addEventListener('pageshow', closeAll);
})();
