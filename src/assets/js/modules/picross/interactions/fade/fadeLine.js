import fadeElement from './fadeElement';

export default function fadeLine(header) {
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
    if(square.getAttribute('data-picross-square') !== "true") {
      fadeElement(square)
    }
  });
}
