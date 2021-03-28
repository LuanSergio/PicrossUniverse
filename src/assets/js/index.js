import createMatrix from './utils/createMatrix';
import allocatePicrossValues from './modules/picross/creation/allocatePicrossValues';
import createPicross from './modules/picross/creation/createPicross';
import preventContextMenuOnPicross from './modules/picross/interactions/preventContextMenuOnPicross'
import getPicrossSize from './modules/picross/creation/getPicrossSize';
import generateNewPicross from './modules/picrossSettings/generateNewPicross';
import closeModalWhenOverlayIsClicked from './modules/modal/closeModalWhenOverlayIsClicked';
import closeModalWhenButtonIsPressed from './modules/modal/closeModalWhenButtonIsPressed';
import closeModalWhenEscIsPressed from './modules/modal/closeModalWhenEscIsPressed';
import validatePicrossSize from './modules/picrossSettings/validatePicrossSize';
import hidePicrossSettingsOnMobile from './modules/picrossSettings/hidePicrossSettingsOnMobile';
import openSettingsWhenButtonIsClicked from './modules/picrossSettings/openSettingsWhenButtonIsClicked';
import closeSettingsOnButtonClick from './modules/picrossSettings/closeSettingsOnButtonClick';
import clearInputsOnFocusOnMobile from './modules/picrossSettings/clearInputsOnFocusOnMobile';
import openClearPicrossValuesModal from './modules/picrossSettings/openClearPicrossValuesModal';


let matrix = createMatrix(5, 5);
let stopTime = false;

const { width, height } = getPicrossSize();

hidePicrossSettingsOnMobile();
openSettingsWhenButtonIsClicked();
closeSettingsOnButtonClick();
clearInputsOnFocusOnMobile();

validatePicrossSize();
allocatePicrossValues(width, height, matrix, 5);
createPicross(width, height, matrix, stopTime);

openClearPicrossValuesModal();

generateNewPicross(width, height);
preventContextMenuOnPicross();

const modalWinning = document.querySelector('[data-modal-winning-screen]');
const closeButtonModalWinning = document.querySelector('[data-modal-winning-screen-close]');
const overlayModalWinning = document.querySelector('[data-modal-winning-screen-overlay]');

closeModalWhenButtonIsPressed(modalWinning, closeButtonModalWinning, true);
closeModalWhenOverlayIsClicked(modalWinning, overlayModalWinning, true);
closeModalWhenEscIsPressed(modalWinning);

const modalClearPicross = document.querySelector('[data-modal-clear-picross]');
const closeButtonModalClearPicross = document.querySelector('[data-modal-clear-picross-overlay]');
const overlayModalClearPicross = document.querySelector('[data-modal-clear-picross-close]');

closeModalWhenButtonIsPressed(modalClearPicross, closeButtonModalClearPicross);
closeModalWhenOverlayIsClicked(modalClearPicross, overlayModalClearPicross);
closeModalWhenEscIsPressed(modalClearPicross);
