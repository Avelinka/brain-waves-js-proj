(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn1 = document.querySelector('.js-close-menu-1');
    const closeMenuBtn2 = document.querySelector('.js-close-menu-2');
    //const closeMenuBtnIcon = document.querySelector('.js-close-menu-icon'); //  кнопка з хрестиком

    const toggleMenu = () => {
        const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');
    };

    const closeModal = () => {
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
    //closeMenuBtnIcon.addEventListener('click', closeModal); //  слухач подій для хрестика

    document.addEventListener('keydown', handleEscKeyPress);

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
        bodyScrollLock.enableBodyScroll(document.body);
    });
})();