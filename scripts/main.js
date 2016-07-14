'use strict';

(function () {
  'use strict';

  var show = document.getElementById('js-show');
  var main = document.getElementById('js-main');

  show.addEventListener('click', function () {
    if (main.classList.contains('menu-open')) {
      main.classList.remove('menu-open');
    } else {
      main.classList.add('menu-open');
    }
  });
})();