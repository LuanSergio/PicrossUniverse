import toogleModal from './toggleModal'
import confetti from '../../utils/confetti';

export default function closeModalWhenOverlayIsClicked() {
  const overlay = document.querySelector('[data-modal-overlay]');

  overlay.addEventListener('click', () => {
    confetti.stop();
    toogleModal();
  });
}
