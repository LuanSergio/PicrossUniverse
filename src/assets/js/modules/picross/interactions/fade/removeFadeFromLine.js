import removeFadeFromElement from './removeFadeFromElement';

export default function removeFadeFromLine(header) {
  let squareAttribute;
  let attributeValue;

  if (header.getAttribute('data-numbers-x')) {
    attributeValue = header.getAttribute('data-numbers-x');
    squareAttribute = "data-y"
  } else if (header.getAttribute('data-numbers-y')) {
    attributeValue = header.getAttribute('data-numbers-y');
    squareAttribute = "data-x"
  }

  const squares = document.querySelectorAll(`[${squareAttribute}="${attributeValue}"]`);

  squares.forEach(square => {
    const squarePositionX = square.getAttribute('data-x');
    const squarePositionY = square.getAttribute('data-y');

    const headerX = document.querySelector(`[data-numbers-x="${squarePositionY}"]`);
    const headerY = document.querySelector(`[data-numbers-y="${squarePositionX}"]`);

    if (!headerX.getAttribute('fade') && !headerY.getAttribute('fade')) { 
      removeFadeFromElement(square);
    }

  });
}
