import clearSquare from '../picross/interactions/clearSquare';
import clearAttribute from '../picross/interactions/clearAttribute';
import clearFade from '../picross/interactions/fade/clearFade';

export default function clearPicrossValues() {
  const squares = document.querySelectorAll('[data-picross-square]');

  squares.forEach(square => {
    clearSquare(square);
    clearAttribute(square);
  });

  clearFade();
}
