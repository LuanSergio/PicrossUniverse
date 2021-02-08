export default function addMinimalValueToInputIfInputIsEmpty() {
  const valueInputGroup = document.querySelectorAll('[data-select-width],[data-select-height]');

  valueInputGroup.forEach(input => {
    if (input.value === '') {
      input.value = '5';
    }
  });
}