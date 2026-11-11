import { mobileLayoutQuery } from '../../utils/isMobileLayout';

// The settings start hidden on the mobile layout (they cover the whole screen)
// and visible on the desktop one. This is kept in sync when the layout changes,
// e.g. when a tablet is rotated.
export default function hidePicrossSettingsOnMobile() {
  const picrossSettings = document.querySelector('[data-picross-settings]');
  const mobileLayout = window.matchMedia(mobileLayoutQuery);

  const update = isMobile => {
    picrossSettings.classList.toggle('hidden', isMobile);
    picrossSettings.setAttribute('aria-hidden', `${isMobile}`);
  };

  update(mobileLayout.matches);

  const onChange = event => update(event.matches);

  if (mobileLayout.addEventListener) {
    mobileLayout.addEventListener('change', onChange);
  } else {
    mobileLayout.addListener(onChange);
  }
}
