import states from '../states';

export default function fadeElement(element) {
  element.classList.add(states.fade);
  element.setAttribute('fade', 'true');
}
