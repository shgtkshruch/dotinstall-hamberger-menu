(() => {
  'use strict';

  const show = document.getElementById('js-show');
  const main = document.getElementById('js-main');

  show.addEventListener('click', function() {
    if (main.classList.contains('menu-open')) {
      main.classList.remove('menu-open');
    } else {
      main.classList.add('menu-open');
    }
  });

})();
