import toggleSettings from './toggleSettings';

export default function openSettingsWhenButtonIsClicked() {

  const button = document.querySelector('[data-open-settings]');

  button.addEventListener('click', () => {
    toggleSettings();
  })
}
