export default function closeModal(modal) {
  modal.setAttribute("aria-hidden", "true");
  modal.classList.add("hidden");
}
