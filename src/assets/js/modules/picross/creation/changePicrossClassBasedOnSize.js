export default function changePicrossClassBasedOnSize(width, height) {
  const squares = document.querySelectorAll('[data-picross-square]');
  const valuesHolder = document.querySelectorAll('[data-numbers-x],[data-numbers-y]');

  const biggerValue = width > height ? width : height;

  console.log('height', height);
  squares.forEach(square => {
    square.classList.add(`picross__square-size-${biggerValue}`)
  });

  valuesHolder.forEach(value => {
    value.classList.add(`picross__values-size-${biggerValue}`)
  });

}