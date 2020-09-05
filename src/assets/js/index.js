//picross
import createMatrix from './utils/createMatrix';
import alocatePicrossValues from './modules/picross/alocatePicrossValues';
import createPicross from './modules/picross/createPicross';
import preventContextMenu from './utils/preventContextMenu'
import definePicrossSize from './modules/picross/definePicrossSize';
import generateNewPicross from './modules/picrossSettings/generateNewPicross';

let matrix = createMatrix(5, 5);
console.log(matrix);

alocatePicrossValues(5, 5, matrix, 5);

const {width, height} = definePicrossSize();

createPicross(width, height, matrix);
generateNewPicross(width, height);
preventContextMenu();