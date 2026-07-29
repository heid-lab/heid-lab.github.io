/* Research "Areas of research" tabs. Progressive enhancement: the tablist and
   the four .theme panels render stacked without JS (and the tab links still jump
   to each panel). With JS, the tabs show one panel at a time — 01 by default. */
(function () {
  var list = document.querySelector('.area-cards[role="tablist"]');
  if (!list) return;

  var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (tab) {
    return document.getElementById(tab.getAttribute('aria-controls'));
  });
  if (tabs.length < 2 || panels.some(function (p) { return !p; })) return;

  // Signals to the stylesheet that tabs are active (enables the tab-folder look
  // and the single-panel layout). Only set once we know enhancement will run.
  document.documentElement.classList.add('js-tabs');

  function select(index, focusTab) {
    tabs.forEach(function (tab, i) {
      var on = i === index;
      tab.setAttribute('aria-selected', String(on));
      tab.classList.toggle('is-active', on);
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
    });
    if (focusTab) tabs[index].focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();
      select(i);
    });
    tab.addEventListener('keydown', function (e) {
      var next;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      else return;
      e.preventDefault();
      select(next, true);
    });
  });

  // If the page was opened with a #area-0x hash, honour it; otherwise show 01.
  var start = 0;
  var hash = window.location.hash.replace('#', '');
  tabs.forEach(function (tab, i) {
    if (tab.getAttribute('aria-controls') === hash) start = i;
  });
  select(start);
})();
