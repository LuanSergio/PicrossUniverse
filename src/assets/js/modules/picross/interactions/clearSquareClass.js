import states from './states';

export default function clearSquareClass(square) {
  square.classList.remove(states.true);
  square.classList.remove(states.false);
  square.classList.remove('fade');
}
