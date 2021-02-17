import clearArray from '../../../../utils/clearArray';
import fillSquare from '../fillSquare';
import fadeCompletedLines from '../fade/fadeCompletedLines';
import validatePicrossMatch from '../../validateMatch/validatePicrossMatch';
import states from '../states';

export default function squareMouseUp(clickInteractions, hoveredSquares, width, height, matrix) {
  clickInteractions.initialSquare = null;
  clickInteractions.isPressed = false;
  clickInteractions.orientation = null;
  clickInteractions.orientation = null;

  hoveredSquares.forEach(square => {
    square.classList.remove(states.trueHover);
    square.dataset.picrossSquare = true;

    fillSquare(
      square,
      clickInteractions.buttonType, 
      clickInteractions.behavior
    );
    fadeCompletedLines(square, 'vertical');
    fadeCompletedLines(square, 'horizontal');
    validatePicrossMatch(width, height, matrix);
  });

  clearArray(hoveredSquares);
}
