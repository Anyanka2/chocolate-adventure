(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open-buy]"),
    closeModalBtn: document.querySelector("[data-modal-close-buy]"),
    submitBtn: document.querySelector("[hero-button-buy-submit]"),
    modal: document.querySelector("[data-moda-buy]"),
    postModal: document.querySelector("[top-sellers-thankyou]")
  };

  refs.openModalBtns.forEach(addToggleEvent);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.submitBtn.addEventListener("click", close);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function close(){
    toggleModal();
    togglePostModal();
  }

  function togglePostModal() {
    refs.postModal.classList.toggle("is-hidden");
  }

  function addToggleEvent(element) {
    element.addEventListener("click", toggleModal);
  }
})();
