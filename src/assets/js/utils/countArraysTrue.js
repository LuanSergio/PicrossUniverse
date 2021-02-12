export default function countArraysTrue(array) {
  let counter = 0;
  const arrayValues = [0];

  function removeZeroFromArray() {
    const index = arrayValues.indexOf(0);
    if (index > -1) {
      arrayValues.splice(index, 1);
    }
  }

  // array.forEach(item => {
  //   if (item) {
  //     counter++;
  //   } else if (counter > 0) {
  //     if (arrayValues.length == 1) {
  //       removeZeroFromArray() 
  //     }
  //     arrayValues.push(counter);
  //     counter = 0;
  //   }
  // })

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      counter++;
    } else if (counter > 0) {
      if (arrayValues.length == 1) {
        removeZeroFromArray()
      }
      arrayValues.push(counter);
      counter = 0;
    }
  }

  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length; j++) {
  //     // if (array[j][i]) {
  //     //   counter++;
  //     // } else if (counter > 0) {
  //     //   if (arrayValues.length == 1) {
  //     //     removeZeroFromArray()
  //     //   }
  //     //   arrayValues.push(counter);
  //     //   counter = 0;
  //     // }
  //     console.log(`array[${j}] [${i}]`, array)

  //   }

  // }

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
