import fadeElement from './fadeElement';

export default function fadeLineWhenValueIsZero() {
  const headers = document.querySelectorAll('[data-numbers-y],[data-numbers-x]');

  headers.forEach(header => {
    const value = header.querySelector('[data-number-position]');

    if(value.innerHTML == '0') {
      fadeElement(header);
    }
  });
}
