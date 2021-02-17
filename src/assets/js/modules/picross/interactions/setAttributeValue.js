import states from './states';

export default function setAttributeValue(square) {
  if(square.classList.contains(states.true)) {
    square.dataset.picrossSquare = true;
  } else {
    square.dataset.picrossSquare = false;
  }
}
