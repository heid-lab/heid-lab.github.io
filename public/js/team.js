/* Team page: group filter tabs.
   Progressive enhancement — without this script every card is shown and the
   filter bar is hidden (see the .no-js rule in style.css). We flip
   <html class="no-js"> to "has-js" here so the filters appear only once JS
   actually runs. */
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  root.classList.add('has-js');

  var section = document.querySelector('.team-filter');
  if (!section) return;

  var buttons = Array.prototype.slice.call(section.querySelectorAll('button[data-filter]'));
  var groups = Array.prototype.slice.call(document.querySelectorAll('.team-group'));

  // Show a live count next to each tab label.
  buttons.forEach(function (btn) {
    var f = btn.getAttribute('data-filter');
    var n = f === 'all'
      ? document.querySelectorAll('.team-card').length
      : document.querySelectorAll('.team-group[data-group="' + f + '"] .team-card').length;
    var count = document.createElement('span');
    count.className = 'count';
    count.textContent = n;
    btn.appendChild(document.createTextNode(' '));
    btn.appendChild(count);
  });

  function applyFilter(filter) {
    groups.forEach(function (group) {
      group.hidden = !(filter === 'all' || group.getAttribute('data-group') === filter);
    });
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-filter') === filter));
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyFilter(btn.getAttribute('data-filter'));
    });
  });
})();
