import checkIfMatricesAreIdentical from '../../../utils/checkIfMatricesAreIdentical';

export default function validateHorizontalMatrixLine(picrossClickValuesMatrix, matrix) {
  const picrossClickValuesArrays = [];
  const matrixValuesArrays = []

  for (let i = 0; i < width; i++) {
    const lineValues = countArraysTrue(picrossClickValuesMatrix[i]);
    picrossClickValuesArrays.push(lineValues);
  }

  for (let i = 0; i < width; i++) {
    const lineValues = countArraysTrue(matrix[i]);
    matrixValuesArrays.push(lineValues);
  }

  if (checkIfMatricesAreIdentical(picrossClickValuesArrays, matrixValuesArrays)) {
    return true;
  } else {
    return false
  }
}
