import checkIfMatricesAreIdentical from '../../../utils/checkIfMatricesAreIdentical';
import countArraysTrue from '../../../utils/countArraysTrue';

export default function validateHorizontalMatrixLine(picrossPlayerValuesMatrix, matrix) {
  const picrossPlayerValuesArrays = [];
  const matrixValuesArrays = []

  for (let i = 0; i < matrix.length; i++) {
    const lineValues = countArraysTrue(picrossPlayerValuesMatrix[i]);
    picrossPlayerValuesArrays.push(lineValues);
  }

  for (let i = 0; i < matrix.length; i++) {
    const lineValues = countArraysTrue(matrix[i]);
    matrixValuesArrays.push(lineValues);
  }

  if (checkIfMatricesAreIdentical(picrossPlayerValuesArrays, matrixValuesArrays)) {
    return true;
  } else {
    return false
  }
}
