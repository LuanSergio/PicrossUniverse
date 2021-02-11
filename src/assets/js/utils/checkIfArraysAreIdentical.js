export default function checkIfArraysAreIdentical(baseArray, secondArray) {
  if (baseArray.length !== secondArray.length) {

    return false;
  }
  for (var i = baseArray.length; i--;) {
    if (baseArray[i] !== secondArray[i]) {
      return false;
    }
  }

  return true;
}
