let deferredInstallPrompt = null;
const screenWidth = screen.width;
const installButton = document.querySelector('[data-install-pwa-button]');
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

installButton.addEventListener('click', installPWA);

function saveBeforeInstallPromptEvent(evt) {;
  deferredInstallPrompt = evt;
}

function installPWA(evt) {
  installButton.setAttribute('aria-hidden', true);
  installButton.classList.add('hidden');  
  deferredInstallPrompt.prompt();
  console.log('is it installed', navigator.getInstalledRelatedApps());
}
