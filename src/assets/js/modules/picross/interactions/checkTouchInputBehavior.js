export default function checkTouchInputBehavior() {
  const touchBehavior = document.querySelector('[data-touch-behavior]');

  if (touchBehavior.checked) {
    return 0;
  } else {
    return 2;
  }
}
