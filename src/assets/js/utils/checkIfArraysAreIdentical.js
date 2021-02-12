export default function checkIfArraysAreIdentical(baseArray, secondaryArray) {
  if (baseArray.length !== secondaryArray.length) {
    return false;
  }
  for (var i = baseArray.length; i--;) {
    if (baseArray[i] !== secondaryArray[i]) {
      return false;
    }
  }

  return true;
}
