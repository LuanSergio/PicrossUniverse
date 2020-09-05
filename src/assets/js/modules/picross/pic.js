export default function pic() {
  const squares = document.querySelectorAll('[data-square]');
  const hoveredSquares = [];
  let initialSquare = null;
  let behavior;
//interactions
  squares.forEach(square => {
    square.addEventListener('mousedown', event => {
      initialSquare = event.target;
      checkBehavior(initialSquare);
      hoveredSquares.push(initialSquare);
      event.target.classList.add('hovered-true');
    });
    
    square.addEventListener('mouseenter', event => {
      if(initialSquare) {
        if(!(event.target.classList.contains('hovered-true'))) {
          if(
            (event.target.getAttribute('x') === initialSquare.getAttribute('x')) ||
            (event.target.getAttribute('y') === initialSquare.getAttribute('y'))
            ){
            hoveredSquares.push(event.target);
            event.target.classList.add('hovered-true');
          }
        } else {
          const index = hoveredSquares.indexOf(event.target);
          const last = hoveredSquares.pop();
          hoveredSquares.splice(index, 1);
          event.target.classList.remove('hovered-true');
          last.classList.remove('hovered-true');
        }
      }
    });
  });

  window.addEventListener('mouseup', event => {
    initialSquare = null;
    hoveredSquares.forEach(square => {
      square.classList.remove('hovered-true');
      fillSquare(square, behavior);
    });
    clearArray(hoveredSquares)
  });

  function fillSquare(square, behavior) {
    if(behavior === true) {
      markSquareAsTrue(square);
    } else if(behavior === false) {
      clearSquare(square);
    }
  } 
    
  function markSquareAsTrue(square) {
    square.classList.add('true');
  }

  function clearSquare(square) {
      square.classList.remove('true');
  }

  function clearArray(array) {
    array.splice(0, array.length);
  }

  function checkBehavior(square) {
      if(square.classList.contains('true')) {
        behavior = false;
      } else {
        behavior = true;
      }
  }

}