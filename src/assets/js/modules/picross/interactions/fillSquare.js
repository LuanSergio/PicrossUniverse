import clearSquareClass from './clearSquareClass';
import setAttributeValue from './setAttributeValue';
import states from './states';

export default function fillSquare(square, buttonType, behavior) {
  if(behavior === true) {
    if(buttonType === 0) {
      square.classList.add(states.true);
      square.classList.remove(states.false);
      setAttributeValue(square);
    } else if(buttonType === 2) {
      square.classList.add(states.false);
      square.classList.remove(states.true);
      setAttributeValue(square);
    }
  } else if(behavior === false) {
    clearSquareClass(square);
    setAttributeValue(square);
  }
}
