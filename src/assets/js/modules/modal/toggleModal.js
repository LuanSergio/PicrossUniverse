import addSizeToModal from './addSizeToModal';
import addTimeToModal from './addTimeToModal';

export default function toggleModal(width, height) {
  const modal = document.querySelector('[data-modal]');
  const ariaHiddenValue = modal.getAttribute('aria-hidden') === "true";
  
  addTimeToModal();
  addSizeToModal(width, height);

  modal.setAttribute('aria-hidden', `${!ariaHiddenValue}`);
  modal.classList.toggle('hidden');
}
