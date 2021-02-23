let deferredInstallPrompt = null;
const screenWidth = screen.width;
const installButton = document.querySelector('[data-install-pwa-button]');
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);
installButton.addEventListener('click', installPWA);

function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  deferredInstallPrompt.prompt();
}


function installPWA(evt) {
  deferredInstallPrompt.prompt();
  installButton.srcElement.setAttribute('aria-hidden', true);
  installButton.classList.add('hidden');
}
