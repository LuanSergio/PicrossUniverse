import highlightSquares from '../highlightSquares';
import setStrokeSquares from './setStrokeSquares';

function getPosition(square) {
  return {
    x: parseInt(square.dataset.x, 10),
    y: parseInt(square.dataset.y, 10),
  };
}

function getLineSquares(stroke, start, end) {
  const picross = document.querySelector('[data-picross]');
  const isHorizontal = stroke.orientation === 'horizontal';
  const from = isHorizontal ? start.x : start.y;
  const to = isHorizontal ? end.x : end.y;
  const step = to >= from ? 1 : -1;
  const squares = [];

  // Every square between the start and the pointer is included, so a fast swipe
  // that skips squares still fills the whole line.
  for (let i = from; i !== to + step; i += step) {
    const x = isHorizontal ? i : start.x;
    const y = isHorizontal ? start.y : i;
    const square = picross.querySelector(`[data-picross-square][data-x="${x}"][data-y="${y}"]`);

    if (square) {
      squares.push(square);
    }
  }

  return squares;
}

export default function updateStroke(stroke, square) {
  if (square === stroke.currentSquare) return;

  stroke.currentSquare = square;

  // Going back to the first square unlocks the direction, like before.
  if (square === stroke.initialSquare) {
    stroke.orientation = null;
    setStrokeSquares(stroke, [square]);
    highlightSquares(square, stroke);
    return;
  }

  const start = getPosition(stroke.initialSquare);
  const end = getPosition(square);

  // The first move decides the direction; a diagonal drift (common with fingers)
  // picks the axis the pointer moved the most on.
  if (stroke.orientation === null) {
    const deltaX = Math.abs(end.x - start.x);
    const deltaY = Math.abs(end.y - start.y);
    stroke.orientation = deltaX >= deltaY ? 'horizontal' : 'vertical';
  }

  setStrokeSquares(stroke, getLineSquares(stroke, start, end));
  highlightSquares(square, stroke);
}
