export default function hidePicrossSettingsOnMobile() {
  const screenWidth = screen.width;

  if (screenWidth < 1024) {
    const picrossSettings = document.querySelector('[data-picross-settings]');
    picrossSettings.classList.add('hidden');
    picrossSettings.setAttribute('aria-hidden', 'true');
  }
}
