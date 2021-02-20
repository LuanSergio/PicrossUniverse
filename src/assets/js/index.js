import createMatrix from './utils/createMatrix';
import alocatePicrossValues from './modules/picross/creation/alocatePicrossValues';
import createPicross from './modules/picross/creation/createPicross';
import preventContextMenuOnPicross from './modules/picross/interactions/preventContextMenuOnPicross'
import getPicrossSize from './modules/picross/creation/getPicrossSize';
import generateNewPicross from './modules/picrossSettings/generateNewPicross';
import closeModalWhenOverlayIsClicked from './modules/modal/closeModalWhenOverlayIsClicked';
import closeModalWhenButtonIsPressed from './modules/modal/closeModalWhenButtonIsPressed';
import validatePicrossSize from './modules/picrossSettings/validatePicrossSize';
import hidePicrossSettingsOnMobile from './modules/picrossSettings/hidePicrossSettingsOnMobile';
import openSettingsWhenButtonIsClicked from './modules/picrossSettings/openSettingsWhenButtonIsClicked';
import closeSettingsOnButtonClick from './modules/picrossSettings/closeSettingsOnButtonClick';
import clearInputOnFocus from './modules/picrossSettings/clearInputOnFocusOn';
import openClearPicrossValuesModal from './modules/picrossSettings/openClearPicrossValuesModal';

const screenWidth = screen.width;

let matrix = createMatrix(5, 5);
let stopTime = false;

const { width, height } = getPicrossSize();

hidePicrossSettingsOnMobile();
openSettingsWhenButtonIsClicked();
closeSettingsOnButtonClick();
if (screenWidth < 1024) {
  clearInputOnFocus();
}

validatePicrossSize();
alocatePicrossValues(width, height, matrix, 5);
createPicross(width, height, matrix, stopTime);

openClearPicrossValuesModal();

generateNewPicross(width, height);
preventContextMenuOnPicross();

const modalWinning = document.querySelector('[data-modal-winning-screen]');
const closeButtonModalWinning = document.querySelector('[data-modal-winning-screen-close]');
const overlayModalWinning = document.querySelector('[data-modal-winning-screen-overlay]');

closeModalWhenButtonIsPressed(modalWinning, closeButtonModalWinning);
closeModalWhenOverlayIsClicked(modalWinning, overlayModalWinning);

const modalClearPicross = document.querySelector('[data-modal-clear-picross]');
const closeButtonModalClearPicross = document.querySelector('[data-modal-clear-picross-overlay]');
const overlayModalClearPicross = document.querySelector('[data-modal-clear-picross-close]');

closeModalWhenButtonIsPressed(modalClearPicross, closeButtonModalClearPicross);
closeModalWhenOverlayIsClicked(modalClearPicross, overlayModalClearPicross);
