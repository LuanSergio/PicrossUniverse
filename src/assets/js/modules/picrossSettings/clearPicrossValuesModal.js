import closeModalWhenOverlayIsClicked from '../modal/closeModalWhenOverlayIsClicked';
import closeModalWhenButtonIsPressed from '../modal/closeModalWhenButtonIsPressed';
import closeModalWhenEscIsPressed from '../modal/closeModalWhenEscIsPressed';


export default function clearPicrossValuesModal() {
  const modalClearPicross = document.querySelector('[data-modal-clear-picross]');
  const closeButtonModalClearPicross = document.querySelector('[data-modal-clear-picross-overlay]');
  const overlayModalClearPicross = document.querySelector('[data-modal-clear-picross-close]');

  closeModalWhenButtonIsPressed(modalClearPicross, closeButtonModalClearPicross);
  closeModalWhenOverlayIsClicked(modalClearPicross, overlayModalClearPicross);
  closeModalWhenEscIsPressed(modalClearPicross);
}
