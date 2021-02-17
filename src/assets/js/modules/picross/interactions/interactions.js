import squareMouseDown from './clickEvents/squareMouseDown';
import squareMouseEnter from './clickEvents/squareMouseEnter';
import squareMouseUp from './clickEvents/squareMouseUp';
import highlightSquares from './highlightSquares'

export default function interactions(width, height, matrix) {

  const squares = document.querySelectorAll('[data-picross-square]');
  const hoveredSquares = [];
  const clickInteractions = {
    initialSquare: null,
    buttonType: null,
    behavior: null,
    isPressed: false,
    orientation: null
  }

  squares.forEach(square => {
    square.addEventListener('mousedown', event => {
      squareMouseDown(clickInteractions, event, hoveredSquares);
    });

    square.addEventListener('mouseenter', event => {
      squareMouseEnter(clickInteractions, event.target, hoveredSquares);
    });

    square.addEventListener('mouseover', event => {
      highlightSquares(event.target, clickInteractions);
    });

  });

  window.addEventListener('mouseup', () => {
    squareMouseUp(clickInteractions, hoveredSquares, width, height, matrix);
  });

}
