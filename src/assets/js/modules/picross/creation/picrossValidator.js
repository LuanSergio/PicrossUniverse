import getPicrossValues from './getPicrossValues';
import compareMatrices from '../../../utils/compareMatrices';
import checkIfMatricesAreIdentical from '../../../utils/checkIfMatricesAreIdentical';
import countArraysTrue from '../../../utils/countArraysTrue';
import toggleModal from '../../modal/toggleModal';
import confetti from '../../../utils/confetti.js';

export default function picrossValidator(width, height, matrix) {
  let picrossClickValuesMatrix = getPicrossValues(width, height);
  
  const picrossClickValuesArrays = [];
  const matrixValuesArrays = []

  // if (checkIfMatricesAreIdentical(picrossClickValuesArrays, matrixValuesArrays)) {
  //   confetti.start();
  //   toggleModal(width, height);
  // }


  // console.log('matrix length', matrix.length);

  // if (compareMatrices(width, height, matrix, picrossValues)) {
  //   confetti.start();
  //   toggleModal(width, height);
  // }

  // if (checkIfArraysAreIdentical()){

  // }

  // function checkIfMatrixAreIdentical() {
  //   checkIfArraysAreIdentical
  // };
}
