import createMatrix from './utils/createMatrix';
import alocatePicrossValues from './modules/picross/creation/alocatePicrossValues';
import createPicross from './modules/picross/creation/createPicross';
import preventContextMenuOnPicross from './modules/picross/interactions/preventContextMenuOnPicross'
import getPicrossSize from './modules/picross/creation/getPicrossSize';
import generateNewPicross from './modules/picrossSettings/generateNewPicross';
import closeModalWhenOverlayIsClicked from './modules/winModal/closeModalWhenOverlayIsClicked';
import closeModalWhenButtonIsPressed from './modules/winModal/closeModalWhenButtonIsPressed';
import validatePicrossSize from './modules/picrossSettings/validatePicrossSize';
import hidePicrossSettingsOnMobile from './modules/picrossSettings/hidePicrossSettingsOnMobile';
import openSettingsWhenButtonIsClicked from './modules/picrossSettings/openSettingsWhenButtonIsClicked';
import closeSettingsOnButtonClick from './modules/picrossSettings/closeSettingsOnButtonClick';
import clearInputOnFocus from './modules/picrossSettings/clearInputOnFocusOn';

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
alocatePicrossValues(5, 5, matrix, 5);
createPicross(width, height, matrix, stopTime);

generateNewPicross(width, height);
preventContextMenuOnPicross();

closeModalWhenButtonIsPressed();
closeModalWhenOverlayIsClicked();
