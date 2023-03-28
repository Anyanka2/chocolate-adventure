(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-rewiews]"),
      closeModalBtn: document.querySelector("[data-modal-close-rewiews]"),
      modal: document.querySelector("[data-modal-rewiews]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();