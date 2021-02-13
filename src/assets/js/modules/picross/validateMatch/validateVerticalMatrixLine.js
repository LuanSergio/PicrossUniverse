import checkIfMatricesAreIdentical from '../../../utils/checkIfMatricesAreIdentical';
import countArraysTrue from '../../../utils/countArraysTrue';

export default function validateVerticalMatrixLine(picrossPlayerValuesMatrix, matrix) {
  const picrossPlayerValuesArrays = [];
  const matrixValuesArrays = []

  for (let i = 0; i < matrix[0].length; i++) {
    const verticalMatrixValues = [];
    for (let j = 0; j < picrossPlayerValuesMatrix.length; j++) {
      verticalMatrixValues.push(picrossPlayerValuesMatrix[j][i]);
    }

    const lineValues = countArraysTrue(verticalMatrixValues);
    picrossPlayerValuesArrays.push(lineValues);
  }

  for (let i = 0; i < matrix[0].length; i++) {
    const verticalMatrixValues = [];
    for (let j = 0; j < matrix.length; j++) {
      verticalMatrixValues.push(matrix[j][i]);
    }

    const lineValues = countArraysTrue(verticalMatrixValues);
    matrixValuesArrays.push(lineValues);
  }

  if (checkIfMatricesAreIdentical(picrossPlayerValuesArrays, matrixValuesArrays)) {
    return true;
  } else {
    return false;
  }
}
