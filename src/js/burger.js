(() => {
  const options = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  options.openModalBtn.addEventListener('click', toggleModal);
  options.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    options.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();