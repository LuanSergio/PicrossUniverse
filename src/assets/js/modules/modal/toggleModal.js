import addSizeToModal from './addSizeToModal';
import addTimeToModal from './addTimeToModal';

export default function toggleModal(width, height) {
  const modal = document.querySelector('[data-modal]');
  addTimeToModal();

  if (modal.getAttribute('aria-hidden') == 'true') {
    modal.setAttribute('aria-hidden', 'false');
  } else if (modal.getAttribute('aria-hidden') == 'false') {
    modal.setAttribute('aria-hidden', 'true');
  }

  addSizeToModal(width, height);
  modal.classList.toggle('hidden');
}
