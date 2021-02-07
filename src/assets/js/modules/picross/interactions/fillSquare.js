import clearSquare from './clearSquare';
import setAttributeValue from './setAttributeValue';

export default function fillSquare(square, states, buttonType, behavior) {
  if(behavior === true) {
    if(buttonType === 0) {
      square.classList.add(states.true);
      square.classList.remove(states.false);
      setAttributeValue(square, states);
    } else if(buttonType === 2) {
      square.classList.add(states.false);
      square.classList.remove(states.true);
      setAttributeValue(square, states);
    }
  } else if(behavior === false) {
    clearSquare(square, states);
    setAttributeValue(square, states);
  }
}
