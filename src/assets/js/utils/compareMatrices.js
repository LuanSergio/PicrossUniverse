export default function compareMatrices(columns, rows, matrix1, matrix2) {
  let counter;

  counter = 0;

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < columns; j++) {
      if(matrix1[i][j] === matrix2[i][j]) {
        counter++;
      }
    }
  }

  let size = columns * rows;

  if(counter == size) {
    return true;
  } else {
    return false;
  }
}
