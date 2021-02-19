import clearSquareClass from '../picross/interactions/clearSquareClass';
import clearSquareAttribute from '../picross/interactions/clearSquareAttribute';
import clearFade from '../picross/interactions/fade/clearFade';

export default function clearPicrossValues() {
  const squares = document.querySelectorAll('[data-picross-square]');

  squares.forEach(square => {
    clearSquareClass(square);
    clearSquareAttribute(square);
  });

  clearFade();
}
