import fillSquare from '../fillSquare';
import fadeCompletedLines from '../fade/fadeCompletedLines';
import validatePicrossMatch from '../../validateMatch/validatePicrossMatch';
import states from '../states';
import resetStroke from './resetStroke';

export default function endStroke(stroke, width, height, matrix) {
  stroke.squares.forEach(square => {
    square.classList.remove(states.trueHover);
    fillSquare(square, stroke.buttonType, stroke.behavior);
  });

  // Lines are checked only after every square of the stroke is filled.
  stroke.squares.forEach(square => {
    fadeCompletedLines(square, 'vertical');
    fadeCompletedLines(square, 'horizontal');
  });

  if (stroke.squares.length > 0) {
    validatePicrossMatch(width, height, matrix);
  }

  resetStroke(stroke);
}
