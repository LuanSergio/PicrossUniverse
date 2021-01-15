export default function definePicrossSize() {
  const x = document.querySelector('[data-select-width]');
  const width = parseInt(x.value);
  // const width = parseInt(x.options[x.selectedIndex].value);

  const y = document.querySelector('[data-select-height]');
  const height = parseInt(y.value);
  // const height = parseInt(y.options[y.selectedIndex].value);

  return {
    width,
    height
  }
};
