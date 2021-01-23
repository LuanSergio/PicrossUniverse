import toogleModal from './toggleModal'
import confetti from '../../utils/confetti';

export default function closeModalWhenButtonIsPressed() {
  const closeButton = document.querySelector('[data-modal-close]');

  closeButton.addEventListener('click', () => {
    confetti.stop();
    toogleModal();
  });
}
