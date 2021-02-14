import toogleModal from './toggleModal'
import confetti from '../../utils/confetti';
import toggleSettings from '../picrossSettings/toggleSettings';

export default function closeModalWhenOverlayIsClicked() {
  const overlay = document.querySelector('[data-modal-overlay]');

  overlay.addEventListener('click', () => {
    confetti.stop();
    toogleModal();

    const screenWidth = screen.width;

    if (screenWidth < 1024) {
      toggleSettings();
    }
  });
}
