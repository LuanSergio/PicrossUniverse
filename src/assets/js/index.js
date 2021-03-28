import createMatrix from './utils/createMatrix';
import allocatePicrossValues from './modules/picross/creation/allocatePicrossValues';
import createPicross from './modules/picross/creation/createPicross';
import preventContextMenuOnPicross from './modules/picross/interactions/preventContextMenuOnPicross'
import getPicrossSize from './modules/picross/creation/getPicrossSize';
import generateNewPicross from './modules/picrossSettings/generateNewPicross';
import validatePicrossSize from './modules/picrossSettings/validatePicrossSize';
import hidePicrossSettingsOnMobile from './modules/picrossSettings/hidePicrossSettingsOnMobile';
import openSettingsWhenButtonIsClicked from './modules/picrossSettings/openSettingsWhenButtonIsClicked';
import closeSettingsOnButtonClick from './modules/picrossSettings/closeSettingsOnButtonClick';
import clearInputsOnFocusOnMobile from './modules/picrossSettings/clearInputsOnFocusOnMobile';
import openClearPicrossValuesModal from './modules/picrossSettings/openClearPicrossValuesModal';
import winModal from './modules/picross/validateMatch/winModal';
import clearPicrossValuesModal from './modules/picrossSettings/clearPicrossValuesModal';


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
preventContextMenuOnPicross();

openClearPicrossValuesModal();

generateNewPicross(width, height);

winModal();
clearPicrossValuesModal();