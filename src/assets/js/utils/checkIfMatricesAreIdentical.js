import checkIfArraysAreIdentical from './checkIfArraysAreIdentical';

export default function checkIfMatricesAreIdentical(baseMatrix, secondaryMatrix) {
  const length = baseMatrix.length;
  let counter = 0;

  for (let i = 0; i < length; i++) {
    if (checkIfArraysAreIdentical(baseMatrix[i], secondaryMatrix[i])) {
      counter++;
    }
  }

  // for (let i = 0; i < length; i++) {
  //   for (let j = 0; j < baseMatrix[i].length; j++) {
  //     if (checkIfArraysAreIdentical(baseMatrix[i][j], secondaryMatrix[i])) {
  //       counter++;
  //     }  
  //   }
  // }

  if(length === counter) {
    return true;
  } else {
    return false;
  }
}
