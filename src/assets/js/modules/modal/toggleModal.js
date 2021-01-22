import addSizeToModal from './addSizeToModal';
import addTimeToModal from './addTimeToModal';

export default function toggleModal(width, height) {
  const modal = document.querySelector('[data-modal]');
  addTimeToModal();
  addSizeToModal(width, height);
  modal.classList.toggle('hidden');
}
