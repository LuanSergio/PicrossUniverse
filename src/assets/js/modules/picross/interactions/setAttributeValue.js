export default function setAttributeValue(square, states) {
  if(square.classList.contains(states.true)) {
    square.dataset.picrossSquare = true;
  } else {
    square.dataset.picrossSquare = false;
  }
}
