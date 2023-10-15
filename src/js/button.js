const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('is-hidden');
  },
  hide() {
    this.el.classList.add('is-hidden');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });

    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
