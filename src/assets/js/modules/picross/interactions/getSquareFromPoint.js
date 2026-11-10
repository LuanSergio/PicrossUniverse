export default function getSquareFromPoint(picross, x, y) {
  const element = document.elementFromPoint(x, y);

  if (!element) return null;

  const square = element.closest('[data-picross-square]');

  return square && picross.contains(square) ? square : null;
}
