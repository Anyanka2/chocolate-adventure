(() => {
  const refs = {
    openRewModalBtns: document.querySelectorAll("[data-modal-open-rewiews]"),
    closeRewModalBtn: document.querySelector("[data-modal-close-rewiews]"),
    closeModalRewThankBtn: document.querySelector("[data-modal-close-rewiews-thankyou]"),
    sendRewBtn: document.querySelector("[button-rewiews-send]"),
    rewModal: document.querySelector("[data-modal-rewiews]"),
    rewThankModal: document.querySelector("[rewiews-thankyou]")
  };

  refs.openRewModalBtns.forEach(addToggleEvent);
  refs.closeRewModalBtn.addEventListener("click", toggleRewModal);
  refs.closeModalRewThankBtn.addEventListener("click", toggleRewThankModal);
  refs.sendRewBtn.addEventListener("click", closeRewModalAndShowRewThankyou);

  function toggleRewModal() {
    refs.rewModal.classList.toggle("is-hidden");
  }

  function closeRewModalAndShowRewThankyou() {
    toggleRewModal();
    toggleRewThankModal();
  }

  function toggleRewThankModal() {
    refs.rewThankModal.classList.toggle("is-hidden");
  }

  function addToggleEvent(element) {
    element.addEventListener("click", toggleRewModal);
  }
})();
