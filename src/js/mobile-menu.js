(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn1 = document.querySelector('.js-close-menu-1');
  const closeMenuBtn2 = document.querySelector('.js-close-menu-2');
  const burgerBtn = document.querySelector('#js-icon');

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      burgerBtn.setAttribute(
        'href',
        new URL('/images/sprite.svg#icon-x-close', import.meta.url).href
      );
      document.body.classList.toggle('no-scroll');
    } else {
      burgerBtn.setAttribute(
        'href',
        new URL('/images/sprite.svg#icon-gamburger', import.meta.url).href
      );
      document.body.classList.toggle('no-scroll');
    }

    openMenuBtn.setAttribute('aria-expanded', isMenuOpen);
    mobileMenu.classList.toggle('is-open', isMenuOpen);

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscKeyPress);
    }
  };

  const closeModal = () => {
    isMenuOpen = false;
    document.body.classList.toggle('no-scroll');
    burgerBtn.setAttribute(
      'href',
      new URL('/images/sprite.svg#icon-gamburger', import.meta.url).href
    );
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscKeyPress);
  };

  const handleEscKeyPress = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn1.addEventListener('click', toggleMenu);
  closeMenuBtn2.addEventListener('click', toggleMenu);

  mobileMenu.addEventListener('keydown', handleEscKeyPress);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

//Функція підсвтіки поточної сторінки 

(() => {
  const pageHome = "index.html"; 
  const shopURL = "shopping-list.html";
  const home = document.querySelector('.js-home');
  const shop = document.querySelector('.js-shop');
  let currentURL = window.location.href;

  if (currentURL.endsWith(pageHome)) {
    home.classList.add('current-page');
    shop.classList.remove('current-page');
  }
  else if(currentURL.endsWith(shopURL)){
    home.classList.remove('current-page');
    shop.classList.add('current-page');
    if (localStorage.getItem('theme') === 'theme-dark') {
      document.querySelector('.js-color-dark').style.fill = 'black';
    }
  }})();
