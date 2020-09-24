//picross
import createMatrix from './utils/createMatrix';
import alocatePicrossValues from './modules/picross/creation/alocatePicrossValues';
import createPicross from './modules/picross/creation/createPicross';
import preventContextMenu from './utils/preventContextMenu'
import definePicrossSize from './modules/picross/creation/definePicrossSize';
import generateNewPicross from './modules/picrossSettings/generateNewPicross';
import bottomClouds from './modules/animations/bottomClouds'

bottomClouds();

// let matrix = createMatrix(5, 5);
// console.log(matrix);

// alocatePicrossValues(5, 5, matrix, 5);

// const {width, height} = definePicrossSize();

// createPicross(width, height, matrix);
// generateNewPicross(width, height);
// preventContextMenu();