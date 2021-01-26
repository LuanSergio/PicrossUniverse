export default function changePicrossClassBasedOnSize(width, height) {
  const squares = document.querySelectorAll('[data-picross-square]');
  const valuesHolder = document.querySelectorAll('[data-numbers-x],[data-numbers-y]');
  const timerValues = document.querySelectorAll('[data-timer-hours],[data-timer-minutes],[data-timer-seconds]');

  const biggerValue = width > height ? width : height;
  
  if(biggerValue > 5) {
    squares.forEach(square => {
      square.classList.add(`picross__square-size--${biggerValue}`);
    });

    valuesHolder.forEach(value => {
      value.classList.add(`picross__values-size--${biggerValue}`);
    });

    timerValues.forEach(value => {
      value.classList.add(`picross__timer--${biggerValue}`);
    });
  }
}
