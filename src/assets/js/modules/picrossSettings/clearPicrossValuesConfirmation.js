import clearPicrossValues from './clearPicrossValues';
import toggleModal from '../modal/toggleModal';

export default function clearPicrossValuesConfirmation() {
  const confirmButton = document.querySelector('[data-modal-clear-picross-confirm]');
  const cancelButton = document.querySelector('[data-modal-clear-picross-cancel]');
  const modal = document.querySelector('[data-modal-clear-picross]');

  confirmButton.addEventListener('click', () => {
    clearPicrossValues();
    toggleModal(modal);
  });

  cancelButton.addEventListener('click', () => {
    toggleModal(modal);
  });
}
