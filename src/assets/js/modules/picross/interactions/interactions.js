import squareMouseDown from './mouseEvents/squareMouseDown';
import squareMouseEnter from './mouseEvents/squareMouseEnter';
import squareMouseUp from './mouseEvents/squareMouseUp';
import highlightSquares from './highlightSquares'

export default function interactions() {
  const states = {
    true: 'picross__square--true',
    false: 'picross__square--false',
    trueHover: 'picross__square--active-hover',
    falseHover: 'picross__square--false-hover'
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
      if(clickInteractions.isPressed === false){
        highlightSquares(event.target);
      }
    });

  });

  window.addEventListener('mouseup', event => {
    squareMouseUp(clickInteractions, hoveredSquares, states);
  });

}
