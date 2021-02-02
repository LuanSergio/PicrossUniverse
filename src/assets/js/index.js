//picross
import createMatrix from './utils/createMatrix';
import alocatePicrossValues from './modules/picross/creation/alocatePicrossValues';
import createPicross from './modules/picross/creation/createPicross';
import preventContextMenuOnPicross from './modules/picross/interactions/preventContextMenuOnPicross'
import definePicrossSize from './modules/picross/creation/definePicrossSize';
import generateNewPicross from './modules/picrossSettings/generateNewPicross';
import closeModalWhenOverlayIsClicked from './modules/modal/closeModalWhenOverlayIsClicked'
import closeModalWhenButtonIsPressed from './modules/modal/closeModalWhenButtonIsPressed'
import validatePicrossSize from './modules/picrossSettings/validatePicrossSize'

let matrix = createMatrix(5, 5);
let stopTime = false;
const { width, height } = definePicrossSize();

validatePicrossSize();
alocatePicrossValues(5, 5, matrix, 5);
createPicross(width, height, matrix, stopTime);


generateNewPicross(width, height);
preventContextMenuOnPicross();
closeModalWhenButtonIsPressed();
closeModalWhenOverlayIsClicked();
