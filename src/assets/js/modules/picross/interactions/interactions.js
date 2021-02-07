import squareMouseDown from './clickEvents/squareMouseDown';
import squareMouseEnter from './clickEvents/squareMouseEnter';
import squareMouseUp from './clickEvents/squareMouseUp';
import highlightSquares from './highlightSquares'

export default function interactions(width, height, matrix) {
  const states = {
    true: 'picross__square--true',
    false: 'picross__square--false',
    trueHover: 'picross__square--active-hover',
    highlight: 'picross__square--highlight'
  };

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
      squareMouseDown(clickInteractions, event, hoveredSquares, states);
    });

    square.addEventListener('mouseenter', event => {
      squareMouseEnter(clickInteractions, event.target, hoveredSquares, states);
    });

    square.addEventListener('mouseover', event => {
      highlightSquares(event.target, hoveredSquares, states, clickInteractions);
    });

  });

  window.addEventListener('mouseup', event => {
    squareMouseUp(clickInteractions, hoveredSquares, states, width, height, matrix);
  });

}
