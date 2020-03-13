export function picrossNumberCounter(width, height, matrix, direction) {
  let numbersArray = [];
  let counter = 0;

  if(direction === 'horizontal') {
    for (let i = 0; i < height; i++) {
      numbersArray[i] = [];
    }
    for(let i = 0, k = 0; i < height; i++) {
      for(let j = 0; j <  width; j++) {
        if(matrix[i][j] === true) {
          counter++;
          if ((j + 1) == width) {
            numbersArray[k].push(counter);
            counter = 0;
          }
        } else {
            if(counter != 0) {
              numbersArray[k].push(counter);
              counter = 0;
            }
        }
      }
      k++;
    }
  } else if(direction === 'vertical') {
      for (let i = 0; i < width; i++) {
        numbersArray[i] = [];
      }
      for(let i = 0, k = 0; i < width; i++) {
        for(let j = 0; j <  height; j++) {
          if(matrix[j][i] === true) {
            counter++;
            if ((j + 1) == height) {
              numbersArray[k].push(counter);
              counter = 0;
            }
          } else {
              if(counter != 0) {
                numbersArray[k].push(counter);
                counter = 0;
              }
          }
        }
      k++;
  }
}
  return numbersArray;
}
