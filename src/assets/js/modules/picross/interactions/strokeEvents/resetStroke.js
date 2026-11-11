export default function resetStroke(stroke) {
  stroke.pointerId = null;
  stroke.pointerType = null;
  stroke.initialSquare = null;
  stroke.currentSquare = null;
  stroke.buttonType = null;
  stroke.behavior = null;
  stroke.orientation = null;
  stroke.squares = [];
}
