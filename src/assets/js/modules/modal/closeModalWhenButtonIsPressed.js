import toggleModal from './toggleModal'
import confetti from '../../utils/confetti';
import toggleSettings from '../picrossSettings/toggleSettings';

export default function closeModalWhenButtonIsPressed(modal, closeButton, won = undefined) {

  closeButton.addEventListener('click', () => {
    confetti.stop();
    toggleModal(modal);

    const screenWidth = screen.width;

    if (screenWidth < 1024) {
      if(won) {
        console.log('true')
        toggleSettings();
      }
    }
  });
}
