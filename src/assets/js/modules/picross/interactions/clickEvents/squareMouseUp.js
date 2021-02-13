import clearArray from '../../../../utils/clearArray';
import fillSquare from '../fillSquare';
import fadeCompletedLines from '../fade/fadeCompletedLines';
import picrossValidator from '../../validateMatch/picrossValidator';

export default function squareMouseUp(clickInteractions, hoveredSquares, states, width, height, matrix) {
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
    fadeCompletedLines(square, 'vertical');
    fadeCompletedLines(square, 'horizontal');
    picrossValidator(width, height, matrix);
  });

  clearArray(hoveredSquares);
}
