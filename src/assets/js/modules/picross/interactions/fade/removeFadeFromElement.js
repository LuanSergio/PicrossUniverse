export default function removeFadeFromElement(element) {
  element.classList.remove('fade');
  element.removeAttribute('fade');
}
