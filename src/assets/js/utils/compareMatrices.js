export function compareMatrices(columns, rows, matrix1, matrix2) {
  let counter;
  // console.log('working');

  // console.log('matrix1:');
  // console.log(matrix1);

  // console.log('typeof matrix2[0][1]:')

  // console.log(typeof matrix2[0][1])

  // console.log('matrix2:');
  // console.log(matrix2);
  counter = 0;
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
      if(matrix1[i][j] === matrix2[i][j]) {
        counter++;
      }
    }
  }

  let size = columns * rows;

  // console.log('size');
  // console.log(size);

  // console.log('counter');
  // console.log(counter);


  if(counter == size) {
    console.log('true');
    alert('YOU WIN!')
    return true;
  } else {
    return false;
  }
}