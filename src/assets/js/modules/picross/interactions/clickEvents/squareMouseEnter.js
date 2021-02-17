import states from '../states';

export default function squareMouseEnter(clickInteractions, target, hoveredSquares) {
  const initialSquare = clickInteractions.initialSquare;
  const orientation = clickInteractions.orientation;

  if(target.isSameNode(initialSquare)) {
    clickInteractions.orientation = null;
  }

  if(clickInteractions.initialSquare) {
    const isTheSameRow = target.getAttribute('data-x') === initialSquare.getAttribute('data-x');
    const isTheSameColumn = target.getAttribute('data-y') === initialSquare.getAttribute('data-y');

      if(!(target.classList.contains(states.trueHover))) {
        if(isTheSameRow || isTheSameColumn){
          if(isTheSameRow) {
            if(orientation != 'x') {
              hoveredSquares.push(target);
              target.classList.add(states.trueHover);
            }
          } 
          else if (isTheSameColumn) {
            if(orientation != 'y') {
              hoveredSquares.push(target);
              target.classList.add(states.trueHover);
            }
          }
        }

      } 
      else {
        if(!(target.isSameNode(initialSquare))) {
            const lastButOne = hoveredSquares[hoveredSquares.length - 2];

            if(target.isSameNode(lastButOne)) {
              const index = hoveredSquares.indexOf(target);
              const last = hoveredSquares.pop();
              hoveredSquares.splice(index, 1);
              target.classList.remove(states.trueHover);
              last.classList.remove(states.trueHover);
            }

        } 
        else if(hoveredSquares.length === 2){
          const last = hoveredSquares.pop();
          last.classList.remove(states.trueHover);
          hoveredSquares.push(initialSquare);
          initialSquare.classList.add(states.trueHover);
        }
      }
  }
}
