export default function addTimeToModal() {
  const time = document.querySelector('[data-modal-winning-screen-time]');
  const seconds = document.querySelector('[data-timer-seconds');
  const minutes = document.querySelector('[data-timer-minutes');
  const hours = document.querySelector('[data-timer-hours');
  
  time.innerHTML = hours.innerHTML + minutes.innerHTML + seconds.innerHTML;
}
