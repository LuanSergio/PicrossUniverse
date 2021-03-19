let deferredInstallPrompt = null;
const installButton = document.querySelector('[data-install-pwa-button]');
const installButtonContainer = document.querySelector('[data-install-pwa-button-container]');

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

installButton.addEventListener('click', installPWA);

function saveBeforeInstallPromptEvent(evt) {
  deferredInstallPrompt = evt;
  installButtonContainer.classList.remove('hidden');
  installButtonContainer.setAttribute('aria-hidden', false);
}

function installPWA(evt) {
  deferredInstallPrompt.prompt();
}
