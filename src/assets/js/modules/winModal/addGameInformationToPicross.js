export default function addGameInformationToPicross() {
  const time = document.querySelector('[data-modal-time]');
  const seconds = document.querySelector('[data-timer-seconds');
  const minutes = document.querySelector('[data-timer-minutes').innerHTML;
  const hours = document.querySelector('[data-timer-hours').innerHTML;

  time.innerHTML = hours + minutes + seconds.innerHTML;

  const columns = document.querySelector('[data-modal-columns]');
  const rows = document.querySelector('[data-modal-rows]');

  columns.innerHTML = width;
  rows.innerHTML = height;
}