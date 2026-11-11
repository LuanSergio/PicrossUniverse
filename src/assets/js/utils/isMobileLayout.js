// Mirrors the `mobile` breakpoint in style/core/config/_media.scss (em(1023)),
// so JS and CSS always agree on which layout is active. Unlike `screen.width`,
// this follows the viewport, including tablet rotation.
export const mobileLayoutQuery = '(max-width: 63.9375em)';

export default function isMobileLayout() {
  return window.matchMedia(mobileLayoutQuery).matches;
}
