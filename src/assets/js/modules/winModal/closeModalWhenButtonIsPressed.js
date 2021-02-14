import toogleModal from './toggleModal'
import confetti from '../../utils/confetti';
import toggleSettings from '../picrossSettings/toggleSettings';

export default function closeModalWhenButtonIsPressed() {
  const closeButton = document.querySelector('[data-modal-close]');

  closeButton.addEventListener('click', () => {
    confetti.stop();
    toogleModal();

    const screenWidth = screen.width;

    if (screenWidth < 1024) {
      toggleSettings();
    }
  });
}
