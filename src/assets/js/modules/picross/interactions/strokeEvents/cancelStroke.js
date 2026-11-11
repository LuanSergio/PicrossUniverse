import states from '../states';
import resetStroke from './resetStroke';

export default function cancelStroke(stroke) {
  stroke.squares.forEach(square => square.classList.remove(states.trueHover));

  resetStroke(stroke);
}
