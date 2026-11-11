import toggleSettings from './toggleSettings';
import isMobileLayout from '../../utils/isMobileLayout';

export default function closeSettingsOnButtonClick() {
  const closeButton = document.querySelector('[data-settings-close]');
  const generateButton = document.querySelector('[data-generate-picross]');

  closeButton.addEventListener('click', () => {
    toggleSettings();
  });

  // On the mobile layout the settings cover the board, so creating a new
  // picross also closes them. Checked on click so it follows rotation/resizes.
  generateButton.addEventListener('click', () => {
    if (isMobileLayout()) {
      toggleSettings();
    }
  });
}
