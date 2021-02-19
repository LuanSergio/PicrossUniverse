import states from '../states';

export default function removeFadeFromElement(element) {
  element.classList.remove(states.fade);
  element.removeAttribute('fade');
}
