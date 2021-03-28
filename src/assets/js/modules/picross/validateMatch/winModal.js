import closeModalWhenOverlayIsClicked from '../../modal/closeModalWhenOverlayIsClicked';
import closeModalWhenButtonIsPressed from '../../modal/closeModalWhenButtonIsPressed';
import closeModalWhenEscIsPressed from '../../modal/closeModalWhenEscIsPressed';

export default function settingsModal() {
  const modalWin = document.querySelector('[data-modal-win-screen]');
  const closeButtonModalWin = document.querySelector('[data-modal-win-screen-close]');
  const overlayModalWin = document.querySelector('[data-modal-win-screen-overlay]');

  closeModalWhenButtonIsPressed(modalWin, closeButtonModalWin, true);
  closeModalWhenOverlayIsClicked(modalWin, overlayModalWin, true);
  closeModalWhenEscIsPressed(modalWin);
}