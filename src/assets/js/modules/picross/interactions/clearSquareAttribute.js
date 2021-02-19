export default function clearSquareAttribute(square) {
  square.setAttribute('data-picross-square', '');
  square.removeAttribute('fade');
}
