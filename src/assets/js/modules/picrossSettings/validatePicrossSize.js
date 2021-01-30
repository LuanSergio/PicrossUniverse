export default function validatePicrossSize() {
  const inputs = document.querySelectorAll('[data-select-width],[data-select-height]');
  const maxLength = 30;

  inputs.forEach(input => {
    input.addEventListener('change', () => {
      input.max = maxLength;
      if (input.value < 5) input.value = 5;
      if (input.value > maxLength) input.value = maxLength;
    });
  });
};
