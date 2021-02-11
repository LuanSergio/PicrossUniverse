export default function checkSlideInputBehavior(initialSquare, states) {
  const touchBehavior = document.querySelector('[data-touch-behavior]');

  if (touchBehavior.checked) {
    alert('true');
    return true;
  } else {
    alert('false');
    return false;
  }
}