export default function countArraysTrue(array) {
  let counter = 0;
  const arrayValues = [0];

  function removeZeroFromArray() {
    const index = arrayValues.indexOf(0);
    if (index > -1) {
      arrayValues.splice(index, 1);
    }
  }

  array.forEach(item => {
    if (item) {
      counter++;
    } else if (counter > 0) {
      if (arrayValues.length == 1) {
        removeZeroFromArray() 
      }
      arrayValues.push(counter);
      counter = 0;
    }
  })

  if (counter > 0) {
    if (arrayValues.length == 1) {
      removeZeroFromArray()
    }
    arrayValues.push(counter);
    counter = 0;
  } else if (arrayValues.length == 0) {
    arrayValues.push(0);
  }

  return arrayValues;
}
