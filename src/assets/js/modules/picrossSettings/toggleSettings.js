export default function toggleSettings() {
  const picrossSettings = document.querySelector('[data-picross-settings]');

  picrossSettings.classList.toggle('hidden');
}
