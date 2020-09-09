import setClickOrientation from './setClickOrientation';

export default function highlightSquares(highlightedSquare, hoveredSquares, states, clickInteractions){

  const squares = document.querySelectorAll('[data-picross-square]');
  if(highlightedSquare.isSameNode(clickInteractions.initialSquare)) {
    clickInteractions.orientation = null;
  } 

  squares.forEach(square => {

    setClickOrientation(highlightedSquare, states, clickInteractions);
    
    if(clickInteractions.isPressed === false){
      if((highlightedSquare.getAttribute('data-x')) === (square.getAttribute('data-x')) ||
      (highlightedSquare.getAttribute('data-y')) === (square.getAttribute('data-y'))){
        square.classList.add('picross__square--highlight');
      } else {
        square.classList.remove('picross__square--highlight');
      }

    } else if(clickInteractions.isPressed === true) {
      console.log('orientation', clickInteractions.orientation );
      if(clickInteractions.orientation === 'x') {
        if((clickInteractions.initialSquare.getAttribute('data-y')) === (square.getAttribute('data-y'))){
          square.classList.add('picross__square--highlight');
        } else {
          square.classList.remove('picross__square--highlight');
        }
      } else if (clickInteractions.orientation === 'y') {


        if((clickInteractions.initialSquare.getAttribute('data-x')) === (square.getAttribute('data-x'))){

          square.classList.add('picross__square--highlight');
        } else {
          square.classList.remove('picross__square--highlight');
        }
      } else {
        if((highlightedSquare.getAttribute('data-x')) === (square.getAttribute('data-x')) ||
        (highlightedSquare.getAttribute('data-y')) === (square.getAttribute('data-y'))){
          square.classList.add('picross__square--highlight');
        } else {
          square.classList.remove('picross__square--highlight');
        }
      }

    }
  });
}
