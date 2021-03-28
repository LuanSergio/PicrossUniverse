import clearInputsOnFocus from './clearInputsOnFocus';

export default function clearInputOnFocusOnMobile() {
  const screenWidth = screen.width;

  if (screenWidth < 1024) {
    clearInputsOnFocus();
  }
}
