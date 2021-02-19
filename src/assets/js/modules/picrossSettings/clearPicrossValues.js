import clearSquare from '../picross/interactions/clearSquare';
import clearAttribute from '../picross/interactions/clearAttribute';
import clearFade from '../picross/interactions/fade/clearFade';

export default function clearPicrossValues() {
  const clearButton = document.querySelector('[data-clear-picross-button]');

  clearButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('[data-picross-square]');
    resetSquare(squares);
    clearFade();
  })

  function resetSquare(squares) {
    squares.forEach(square => {
      clearSquare(square);
      clearAttribute(square);
    });
  }
}
