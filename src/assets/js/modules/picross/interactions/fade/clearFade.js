import removeFadeFromElement from './removeFadeFromElement';
import fadeLineWhenValueIsZero from './fadeLineWhenValueIsZero';

export default function removeFadeFromHeaders() {
  const headers = document.querySelectorAll(`[data-numbers-x],[data-numbers-y]`);

  headers.forEach(header => removeFadeFromElement(header));
  fadeLineWhenValueIsZero();
}
