const buttonOpenEl = document.querySelector("[data-modal-open]");
const buttonCloseEl = document.querySelector("[data-modal-close]");
const backdropEl = document.querySelector(".js-backdrop");
const bodyEl = document.body;

buttonOpenEl.addEventListener("click", onModalOpen);
buttonCloseEl.addEventListener("click", onModalClose);
backdropEl.addEventListener("click", onBackdropClick);

function onModalOpen() {
  window.addEventListener("keydown", onEscKeyClick);
  bodyEl.classList.add("show-modal");
}

function onModalClose() {
  window.removeEventListener("keydown", onEscKeyClick);
  bodyEl.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onModalClose();
  }
}

function onEscKeyClick(event) {
  if (event.key === "Escape") {
    onModalClose();
  }
}
