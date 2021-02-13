import checkIfArraysAreIdentical from './checkIfArraysAreIdentical';

export default function checkIfMatricesAreIdentical(baseMatrix, secondaryMatrix) {
  const length = baseMatrix.length;
  let counter = 0;

  for (let i = 0; i < length; i++) {
    if (checkIfArraysAreIdentical(baseMatrix[i], secondaryMatrix[i])) {
      counter++;
    }
  }

  if(length === counter) {
    return true;
  } else {
    return false;
  }
}
