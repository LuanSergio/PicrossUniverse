import clearSquare from '../picross/interactions/clearSquare';

export default function clearPicrossValues() {
  const clearButton = document.querySelector('[data-clear-picross]');
  const squares = document.querySelectorAll('[data-picross-square]');

  clearButton.addEventListener('click', () => {
    squares.forEach(square => clearSquare(square));
  })
}
