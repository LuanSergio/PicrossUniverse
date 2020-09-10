import createMatrix from '../../../utils/createMatrix';

export default function getPicrossValues(columns, rows){

  const square = document.querySelectorAll('[data-picross-square]');
  let matrix = createMatrix(columns, rows);

  for (let i = 0; i < (rows * columns); i++) {
    let x = square[i].getAttribute('data-x');
    let y = square[i].getAttribute('data-y');
    let value = square[i].getAttribute('data-picross-square');
    value = (value == "true");
    matrix[y][x] = value;
  }

  return matrix;
}
