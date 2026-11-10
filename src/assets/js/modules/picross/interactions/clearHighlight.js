import states from './states';

export default function clearHighlight() {
  document
    .querySelectorAll(`.${states.highlight}`)
    .forEach(square => square.classList.remove(states.highlight));
}
