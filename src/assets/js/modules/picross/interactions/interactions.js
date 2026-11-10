import startStroke from './strokeEvents/startStroke';
import updateStroke from './strokeEvents/updateStroke';
import endStroke from './strokeEvents/endStroke';
import cancelStroke from './strokeEvents/cancelStroke';
import getSquareFromPoint from './getSquareFromPoint';
import highlightSquares from './highlightSquares';
import clearHighlight from './clearHighlight';

// The table element survives between games (only its rows are replaced), so the
// listeners of the previous game are removed before new ones are attached.
let previousListeners = null;

export default function interactions(width, height, matrix) {
  const picross = document.querySelector('[data-picross]');

  if (previousListeners) {
    previousListeners.abort();
  }
  previousListeners = new AbortController();
  const { signal } = previousListeners;

  const stroke = {
    pointerId: null,
    pointerType: null,
    initialSquare: null,
    currentSquare: null,
    buttonType: null,
    behavior: null,
    orientation: null,
    squares: [],
  };

  // Pointer events cover mouse, touch and pen with the same code path.
  picross.addEventListener('pointerdown', event => {
    if (stroke.pointerId !== null) return;

    const square = event.target.closest('[data-picross-square]');
    if (!square) return;

    if (event.pointerType === 'mouse' && event.button !== 0 && event.button !== 2) return;

    event.preventDefault();

    // Capture on the table so moves keep coming even when the finger/mouse leaves
    // the square it started on (touch captures to the first target by default).
    try {
      picross.setPointerCapture(event.pointerId);
    } catch (error) {
      // Capturing is an enhancement; the stroke still works without it.
    }

    startStroke(stroke, event, square);
  }, { signal });

  picross.addEventListener('pointermove', event => {
    if (event.pointerId !== stroke.pointerId) return;

    const square = getSquareFromPoint(picross, event.clientX, event.clientY);
    if (square) {
      updateStroke(stroke, square);
    }
  }, { signal });

  picross.addEventListener('pointerup', event => {
    if (event.pointerId !== stroke.pointerId) return;

    const pointerType = stroke.pointerType;
    endStroke(stroke, width, height, matrix);

    const hovered = getSquareFromPoint(picross, event.clientX, event.clientY);
    if (pointerType === 'mouse' && hovered) {
      highlightSquares(hovered, stroke);
    } else {
      clearHighlight();
    }
  }, { signal });

  // Fired when the browser takes over the gesture (e.g. a pinch zoom starts).
  picross.addEventListener('pointercancel', event => {
    if (event.pointerId !== stroke.pointerId) return;

    cancelStroke(stroke);
    clearHighlight();
  }, { signal });

  // A tap is followed by a synthetic click at the same spot. When that tap
  // solves the puzzle, the win modal is already open by then and the click
  // would land on its overlay and close it right away. The board does not use
  // clicks, so they are cancelled for touches that started on a square.
  picross.addEventListener('touchend', event => {
    if (event.target.closest && event.target.closest('[data-picross-square]')) {
      event.preventDefault();
    }
  }, { signal, passive: false });

  // Hover highlight only makes sense for devices that can hover.
  picross.addEventListener('pointerover', event => {
    if (event.pointerType !== 'mouse' || stroke.pointerId !== null) return;

    const square = event.target.closest('[data-picross-square]');
    if (square) {
      highlightSquares(square, stroke);
    } else {
      clearHighlight();
    }
  }, { signal });

  picross.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' && stroke.pointerId === null) {
      clearHighlight();
    }
  }, { signal });
}
