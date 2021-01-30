import clearArray from '../../../../utils/clearArray';
import fillSquare from '../fillSquare';

export default function squareMouseUp(clickInteractions, hoveredSquares, states) {
  clickInteractions.initialSquare = null;
  clickInteractions.isPressed = false;
  clickInteractions.orientation = null;
  clickInteractions.orientation = null;

  hoveredSquares.forEach(square => {
    square.classList.remove(states.trueHover);
    square.dataset.picrossSquare = true;

    fillSquare(
      square, 
      states, 
      clickInteractions.buttonType, 
      clickInteractions.behavior
    );
  });
  // fade here
  console.log('hoveredSquares', hoveredSquares);
  clearArray(hoveredSquares);
}
