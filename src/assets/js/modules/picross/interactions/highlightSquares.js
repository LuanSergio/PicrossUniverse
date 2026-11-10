import states from './states';

// While drawing a line only that line is highlighted; otherwise the row and the
// column of the target square are.
export default function highlightSquares(target, stroke) {
  const squares = document.querySelectorAll('[data-picross-square]');
  const isDrawing = stroke.pointerId !== null && stroke.initialSquare;
  let isHighlighted;

  if (isDrawing && stroke.orientation === 'horizontal') {
    const row = stroke.initialSquare.dataset.y;
    isHighlighted = square => square.dataset.y === row;
  } else if (isDrawing && stroke.orientation === 'vertical') {
    const column = stroke.initialSquare.dataset.x;
    isHighlighted = square => square.dataset.x === column;
  } else {
    const { x, y } = target.dataset;
    isHighlighted = square => square.dataset.x === x || square.dataset.y === y;
  }

  squares.forEach(square => {
    square.classList.toggle(states.highlight, isHighlighted(square));
  });
}
