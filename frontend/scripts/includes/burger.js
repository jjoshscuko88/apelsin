export default function() {
  var burger = document.querySelector('.header__nav-burger');
  var nav = document.querySelector('.header__nav-inner');
  var close = document.querySelector('.header__nav-inner-close');
  var app = document.querySelector('.app__content');


  burger.addEventListener('click', function() {
    if (nav.classList.contains('header__nav-inner_active')) {
      nav.classList.remove('header__nav-inner_active');
    } else {
      nav.classList.add('header__nav-inner_active');
    }
  });

  close.addEventListener('click', function() {
    if (nav.classList.contains('header__nav-inner_active')) {
      nav.classList.remove('header__nav-inner_active');
    } else {
      nav.classList.add('header__nav-inner_active');
    }
  });

  app.addEventListener('click', function () {
    if (nav.classList.contains('header__nav-inner_active')) {
      nav.classList.remove('header__nav-inner_active');
    }
  });
}

