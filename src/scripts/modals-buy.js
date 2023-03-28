(() => {
    const refs = {
      openModalBtns: document.querySelectorAll("[data-modal-open-buy]"),
      closeModalBtn: document.querySelector("[data-modal-close-buy]"),
      modal: document.querySelector("[data-moda-buy]"),
    };
    
    refs.openModalBtns.forEach(addToggleEvent);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  
    function addToggleEvent(element) {
      element.addEventListener("click", toggleModal);
    }
  })();