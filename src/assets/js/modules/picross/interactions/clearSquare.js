import states from './states';

export default function clearSquare(square) {
  square.classList.remove(states.true);
  square.classList.remove(states.false);
  square.classList.remove('fade');
}
