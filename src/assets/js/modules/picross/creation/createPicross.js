import printPicrossNumbers from './printPicrossNumbers';
import picrossValidator from './picrossValidator';
import interactions from '../interactions/interactions'
import picrossNumberCounter from './picrossNumberCounter';
import timer from '../../timer/timer';
import changePicrossClassBasedOnSize from './changePicrossClassBasedOnSize';
import fadeLineWhenValueIsZero from '../interactions/fade/fadeLineWhenValueIsZero';
export default function createPicross(width, height, matrix) {
  const picross = document.querySelector('[data-picross]');
  const horizontalNumbersArray = picrossNumberCounter(width, height, matrix, 'row');
  const verticalNumbersArray = picrossNumberCounter(width, height, matrix, 'column');

  let row = picross.insertRow();
  let header = document.createElement("TH");
  let seconds = document.createElement("span");
  let minutes = document.createElement("span");
  let hours = document.createElement("span");

  seconds.dataset.timerSeconds = '';
  seconds.innerHTML = "00"
  seconds.classList.add('picross__timer', 'picross__timer--seconds');

  minutes.dataset.timerMinutes = '';
  minutes.innerHTML = ":00:"
  minutes.classList.add('picross__timer', 'picross__timer--minutes');

  hours.dataset.timerHours = '';
  hours.innerHTML = "00"
  hours.classList.add('picross__timer', 'picross__timer--hours');

  header.dataset.timerHolder = '';
  header.classList.add('picross__values', 'picross__values--timer');

  header.appendChild(hours);
  header.appendChild(minutes);
  header.appendChild(seconds);
  
  row.appendChild(header);
  row.classList.add('picross__row', 'picross__row--horizontal');

  for (let i = 0; i < width; i++) {
    header = document.createElement("TH");
    header.classList.add('picross__values', 'picross__values--horizontal');
    row.appendChild(header);
    header.dataset.numbersY = `${i}`;
  }
  for (let i = 0; i < height; i++) {
    header = document.createElement("TH");
    header.classList.add('picross__values', 'picross__values--vertical');
    header.dataset.numbersX = `${i}`;
    let row = picross.insertRow();
    row.appendChild(header);
    row.classList.add('picross__row');
    for (let j = 0; j < width; j++) {
      let cell = row.insertCell();
      cell.dataset.picrossSquare = '';
      cell.dataset.x = `${j}`;
      cell.dataset.y = `${i}`;
      cell.className = 'picross__square';
    }
  }

  printPicrossNumbers(width, height, "row", horizontalNumbersArray);
  printPicrossNumbers(width, height, "column", verticalNumbersArray);
  interactions();
  timer();
  fadeLineWhenValueIsZero();
  changePicrossClassBasedOnSize(width, height);
  picrossValidator(width, height, matrix);
}
