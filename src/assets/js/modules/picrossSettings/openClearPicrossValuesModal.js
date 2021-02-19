import clearPicrossValuesConfirmation from './clearPicrossValuesConfirmation';
import toggleModal from '../modal/toggleModal';

export default function openClearPicrossValuesModal() {
  const clearButton = document.querySelector('[data-clear-picross-button]');
  const modal = document.querySelector('[data-modal-clear-picross]');

  clearButton.addEventListener('click', () => {
    toggleModal(modal);
  });

  clearPicrossValuesConfirmation();
}
