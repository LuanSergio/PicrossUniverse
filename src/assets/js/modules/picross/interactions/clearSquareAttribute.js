export default function clearSquare(square) {
  square.setAttribute('data-picross-square', '');
  square.removeAttribute('fade');
}
