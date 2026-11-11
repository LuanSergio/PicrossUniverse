import checkClickBehavior from '../checkClickBehavior';
import getStrokeButton from '../getStrokeButton';
import highlightSquares from '../highlightSquares';
import setStrokeSquares from './setStrokeSquares';

export default function startStroke(stroke, event, square) {
  stroke.pointerId = event.pointerId;
  stroke.pointerType = event.pointerType;
  stroke.buttonType = getStrokeButton(event);
  stroke.initialSquare = square;
  stroke.currentSquare = square;
  stroke.orientation = null;
  stroke.behavior = checkClickBehavior(square, stroke.buttonType);

  setStrokeSquares(stroke, [square]);
  highlightSquares(square, stroke);
}
