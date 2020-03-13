export function definePicrossSize() {
  const x = document.querySelector('[data-select-width]');
  const width = parseInt(x.options[x.selectedIndex].value);

  const y = document.querySelector('[data-select-height]');
  const height = parseInt(y.options[y.selectedIndex].value);
  
  return {
    width,
    height
  }
};
