import toggleSettings from './toggleSettings';

export default function closeSettingsOnButtonClick() {
  const buttons = [];
  const closeButton = document.querySelector('[data-settings-close]');
  buttons.push(closeButton);
  
  const screenWidth = screen.width;

  if (screenWidth < 1024) {
    const generateButton = document.querySelector('[data-generate-picross]');
    buttons.push(generateButton);
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    toggleSettings();
  }));
}
