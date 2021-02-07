export default function changePicrossClassBasedOnSize(width, height) {
  const squares = document.querySelectorAll('[data-picross-square]');
  const valuesHolder = document.querySelectorAll('[data-numbers-x],[data-numbers-y]');
  const timerValues = document.querySelectorAll('[data-timer-hours],[data-timer-minutes],[data-timer-seconds]');

  let biggerValue = width > height ? width : height;
  
  if(biggerValue >= 10 && biggerValue < 15) {
    biggerValue = 10;
  } else if (biggerValue >= 15 && biggerValue < 20) {
    biggerValue = 15;
  } else if (biggerValue >= 20 && biggerValue < 25) {
    biggerValue = 20;
  } else if (biggerValue >= 25 && biggerValue < 30) {
    biggerValue = 25;
  }

  if(biggerValue > 9) {
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
