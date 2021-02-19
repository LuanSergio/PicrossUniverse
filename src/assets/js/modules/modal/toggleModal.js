export default function toggleModal(modal) {
  const ariaHiddenValue = modal.getAttribute('aria-hidden') === "true";

  modal.setAttribute('aria-hidden', `${!ariaHiddenValue}`);
  modal.classList.toggle('hidden');
}
