export default function fillSquares() {
  const states = {
    true: 'picross__square--true',
    false: 'picross__square--false',
    trueHover: 'picross__square--active-hover',
    falseHover: 'picross__square--false-hover'
  };

  let squares = document.querySelectorAll('[data-picross-square]');
  let initialSquare = null;
  let hoveredSquares = [];
  let isToggling = false;
  let clickSide;
  let lastSquare;
  let lastRemoved = false;

  function fillMouseDown(evt, square) {
    initialSquare = square;
    isToggling = true;
    clickSide = evt.button;
    hoveredSquares.push(initialSquare);
  }

  function fillMouseUp(evt, square) {
    isToggling = false;
    if(initialSquare !=  square) {
      activeHoveredSquares(clickSide);
    }
    checkInitialSquare(evt, square);
    initialSquare = null;
    hoveredSquares = [];
    lastRemoved = false;
  }

  function mouseHover(evt) {
    highlightSquares(evt.target);
  }

  function fillMouseEnter(evt) {
    if (isToggling === false) {
      return;
    }
    
    hoveredSquares.push(evt.target);
    if(clickSide === 0) {
      hoverDecorate(evt.target, states.trueHover);
    } else if(clickSide === 2) {
      hoverDecorate(evt.target, states.falseHover);
    }
  }

  function hoverDecorate(square, state) {
    if(!(square.classList.contains(state))){
      fillSquare(initialSquare, state, 'add' );
      fillSquare(square, state, 'add' );
    } else {
      fillSquare(lastSquare, state, 'remove' );
      hoveredSquares.pop(lastSquare);
      fillSquare(square, state, 'remove' );
      hoveredSquares.pop(square);
      lastRemoved = true;
    }
    if (lastRemoved === false) {
      lastSquare = hoveredSquares.slice(-1)[0];
    }
  }

  function activeHoveredSquares(type) {
    if(type === 0) {
      hoveredSquares.forEach(elm => {
        elm.classList.remove(states.trueHover);
        elm.classList.add(states.true);
        removeOppositeClass(elm, states.true);
        checkState(elm);
      });
    } else if(type === 2) {
      hoveredSquares.forEach(elm => {
        elm.classList.remove(states.falseHover);
        elm.classList.add(states.false);
        removeOppositeClass(elm, states.false);
        checkState(elm);
      });
    }
  }

  function fillSquare(square, state, task) {
    if(task === 'add') {
      removeOppositeClass(square, state);
      square.classList.add(state);
      checkState(square);
    } else if (task === 'toggle') {
      removeOppositeClass(square, state);
      square.classList.toggle(state);
      checkState(square);
    } else if (task === 'remove') {
      square.classList.remove(state);
      checkState(square);
    }
  }

  function removeOppositeClass(square, state) {
    if(state === states.true){
      square.classList.remove(states.false);
    } else if (state === states.false){
      square.classList.remove(states.true)
    }
  }

  function checkState(square) {
    if(square.classList.contains(states.true)) {
      square.dataset.picrossSquare = true;
    } else {
      square.dataset.picrossSquare = false;
    }
  }
  
  function checkInitialSquare(evt, square) {
    if(initialSquare != null) {
      if(
        (initialSquare.getAttribute('data-x')) === (square.getAttribute('data-x')) &&
        (initialSquare.getAttribute('data-y')) === (square.getAttribute('data-y'))
      ){
        if(clickSide === 0) {
          fillSquare(evt.target, states.true, 'toggle');
          checkState(evt.target);
        } else if (clickSide === 2) {
          fillSquare(evt.target, states.false, 'toggle');
          checkState(evt.target);
        }   
      }
    }
  }
  
  function outsideMouseUp() {
    isToggling = false;
    activeHoveredSquares(clickSide);
    initialSquare = null;
    hoveredSquares = [];
    lastRemoved = false;
  }

  function highlightSquares(highlightedSquare){
    squares.forEach(elm => {
      if((highlightedSquare.getAttribute('data-x')) === (elm.getAttribute('data-x')) ||
      (highlightedSquare.getAttribute('data-y')) === (elm.getAttribute('data-y'))){
        elm.classList.add('picross__square--highlight');
      } else {
        elm.classList.remove('picross__square--highlight');
      }
    });
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mousedown', evt => fillMouseDown(evt, squares[i]));
    squares[i].addEventListener('mouseup', evt => fillMouseUp(evt, squares[i]));
    squares[i].addEventListener('mouseenter', evt => fillMouseEnter(evt));
    squares[i].addEventListener('mouseover', evt => mouseHover(evt));
    window.addEventListener('mouseup', evt => outsideMouseUp(evt, squares[i]));
    squares[i].addEventListener('contextmenu', evt => evt.preventDefault());
    
  }
}
