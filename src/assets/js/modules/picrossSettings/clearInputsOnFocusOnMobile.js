import clearInputsOnFocus from './clearInputsOnFocus';
import isMobileLayout from '../../utils/isMobileLayout';

export default function clearInputOnFocusOnMobile() {
  if (isMobileLayout()) {
    clearInputsOnFocus();
  }
}
