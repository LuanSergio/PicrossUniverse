import fadeElement from './fadeElement';
import fadeLine from './fadeLine';

export default function fadeLineWhenValueIsZero() {
  const headers = document.querySelectorAll('[data-numbers-y],[data-numbers-x]');
  const isAutoFillChecked = document.querySelector('[auto-fill-completed-lines]').getAttribute('auto-fill-completed-lines');

  headers.forEach(header => {
    const value = header.querySelector('[data-number-position]');

    if(value.innerHTML == '0') {
      fadeElement(header);
      if (isAutoFillChecked === "true") {
        fadeLine(header);
      }
    }
  });
}
