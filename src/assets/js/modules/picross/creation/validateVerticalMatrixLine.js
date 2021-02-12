import checkIfMatricesAreIdentical from '../../../utils/checkIfMatricesAreIdentical';

export default function validateVerticalMatrixLine(picrossClickValuesMatrix, matrix) {
  const picrossClickValuesArrays = [];
  const matrixValuesArrays = []

  for (let i = 0; i < width; i++) {
    const verticalMatrixValues = [];
    for (let j = 0; j < picrossClickValuesMatrix[i].length; j++) {
      verticalMatrixValues.push(picrossClickValuesMatrix[j][i]);
    }
    const lineValues = countArraysTrue(verticalMatrixValues);

    picrossClickValuesArrays.push(lineValues);
  }

  for (let i = 0; i < width; i++) {
    const verticalMatrixValues = [];
    for (let j = 0; j < matrix[i].length; j++) {
      verticalMatrixValues.push(matrix[j][i]);
    }
    const lineValues = countArraysTrue(verticalMatrixValues);

    matrixValuesArrays.push(lineValues);
  }

  if (checkIfMatricesAreIdentical(picrossClickValuesArrays, matrixValuesArrays)) {
    return true;
  } else {
    return false;
  }
}
