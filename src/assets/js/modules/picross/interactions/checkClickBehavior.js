import states from './states';

export default function checkClickBehavior(square, clickSide) {

  if(clickSide === 0) {
    if(square.classList.contains(states.true)) {
      return false;
    } else {
      return true;
    }
  } else if(clickSide === 2) {
    if(square.classList.contains(states.false)) {
      return false;
    } else {
      return true;
    }
  }
}
