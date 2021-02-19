import toogleModal from './toggleModal'
import confetti from '../../utils/confetti';
import toggleSettings from '../picrossSettings/toggleSettings';

export default function closeModalWhenButtonIsPressed(modal, closeButton) {

  closeButton.addEventListener('click', () => {
    confetti.stop();
    toogleModal(modal);

    const screenWidth = screen.width;

    if (screenWidth < 1024) {
      toggleSettings();
    }
  });
}
