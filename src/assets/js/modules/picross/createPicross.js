import { printPicrossNumbers } from './printPicrossNumbers';
import { picrossValidator } from './picrossValidator';
import { fillSquares } from './fillSquares'
export function createPicross(width, height, matrix) {
  const picross = document.querySelector('[data-picross]');

  let row = picross.insertRow();
  let header = document.createElement("TH");
  row.appendChild(header);
  for ( let i = 0; i < width; i++) {
    header = document.createElement("TH");
    header.classList.add('picross__numbers');
    row.appendChild(header);
    header.dataset.numbersY= `${i}`;
  }
  for (let i = 0; i < height; i++) {
    header = document.createElement("TH");
    header.classList.add('picross__numbers');
    header.dataset.numbersX= `${i}`;
    let row = picross.insertRow();
    row.appendChild(header);
      for (let j = 0; j < width; j++) {
        let cell = row.insertCell();
        cell.dataset.picrossSquare = '';
        cell.dataset.x = `${j}`;
        cell.dataset.y = `${i}`;
        cell.className = 'picross__square';
      }
  }

  printPicrossNumbers(width, height, matrix, "horizontal");
  printPicrossNumbers(width, height, matrix, "vertical");
  fillSquares();
  picrossValidator(width, height, matrix);
}
