import toggleSettings from './toggleSettings';

export default function openSettingsWhenButtonIsClicked() {

  const button = document.querySelector('[data-open-settings-button]');

  button.addEventListener('click', () => {
    toggleSettings();
  })
}
