import setClickOrientation from './setClickOrientation';

export default function highlightSquares(target, hoveredSquares, states, clickInteractions){
  const initialSquare = clickInteractions.initialSquare;
  const squares = document.querySelectorAll('[data-picross-square]');
  const isPressed = clickInteractions.isPressed;

  if(target.isSameNode(initialSquare)) {
    clickInteractions.orientation = null;
  } 

  squares.forEach(square => {

    setClickOrientation(target, states, clickInteractions);
    
    if(isPressed === false){
      if((target.getAttribute('data-x')) === (square.getAttribute('data-x')) ||
      (target.getAttribute('data-y')) === (square.getAttribute('data-y'))){
        square.classList.add('picross__square--highlight');
      } 
      else {
        square.classList.remove('picross__square--highlight');
      }

    } 
    else if(isPressed === true) {
      const isTheSameRow = (initialSquare.getAttribute('data-x')) === (square.getAttribute('data-x'));
      const isTheSameColumn = (initialSquare.getAttribute('data-y')) === (square.getAttribute('data-y'));
      
      if(clickInteractions.orientation === 'x') {
        if(isTheSameColumn){
          square.classList.add('picross__square--highlight');
        } 
        else {
          square.classList.remove('picross__square--highlight');
        }

      } 
      else if (clickInteractions.orientation === 'y') {
        if(isTheSameRow){
          square.classList.add('picross__square--highlight');
        } 
        else {
          square.classList.remove('picross__square--highlight');
        }

      } 
      else {
        if((target.getAttribute('data-x')) === (square.getAttribute('data-x')) ||
        (target.getAttribute('data-y')) === (square.getAttribute('data-y'))){
          square.classList.add('picross__square--highlight');
        } 
        else {
          square.classList.remove('picross__square--highlight');
        }
      }
    }
  });
}
