export default function definePicrossSize() {
  const x = document.querySelector('[data-select-width]');
  const width = parseInt(x.value);

  const y = document.querySelector('[data-select-height]');
  const height = parseInt(y.value);

  return {
    width,
    height
  }
};
