export default function toggleSettings() {
  const picrossSettings = document.querySelector('[data-picross-settings]');
  const ariaHiddenValue = picrossSettings.getAttribute('aria-hidden') === "true";

  picrossSettings.classList.toggle('hidden');
  picrossSettings.setAttribute('aria-hidden', `${!ariaHiddenValue}`);
}
