export default function highlightSquares(highlightedSquare){
  const squares = document.querySelectorAll('[data-picross-square]');
  squares.forEach(elm => {
    if((highlightedSquare.getAttribute('data-x')) === (elm.getAttribute('data-x')) ||
    (highlightedSquare.getAttribute('data-y')) === (elm.getAttribute('data-y'))){
      elm.classList.add('picross__square--highlight');
    } else {
      elm.classList.remove('picross__square--highlight');
    }
  });
}
