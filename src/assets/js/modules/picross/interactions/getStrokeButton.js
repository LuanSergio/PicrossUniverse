import checkTouchInputBehavior from './checkTouchInputBehavior';

// 0 fills the square, 2 marks it with an X.
// A mouse decides with its buttons; touch and pen use the on-screen toggle.
// This depends on the input used, not on the screen size, so tablets with a
// wide screen still use the toggle.
export default function getStrokeButton(event) {
  if (event.pointerType === 'mouse') {
    return event.button === 2 ? 2 : 0;
  }

  return checkTouchInputBehavior();
}
