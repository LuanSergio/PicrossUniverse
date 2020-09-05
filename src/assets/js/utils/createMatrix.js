export default function createMatrix(columns, rows) {
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    if (!matrix[i]) {
      matrix[i] = [];
    }
    for (let j = 0; j < columns; j++) {
      if (!matrix[i][j]) {
        matrix[i][j] = [];
      }
    }
  }
  
  return matrix;
}
