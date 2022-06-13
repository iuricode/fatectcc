export function modal(nameModal, closeModal, buttonModal) {
  var modal = document.getElementById(nameModal);

  document.getElementById(buttonModal).addEventListener("click", () => {
    modal.classList.add("modal-active");
  });

  document.getElementById(closeModal).addEventListener("click", () => {
    modal.classList.remove("modal-active");
  });
}
