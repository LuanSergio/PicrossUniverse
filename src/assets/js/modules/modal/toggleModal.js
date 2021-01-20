export default function toggleModal(width, height) {
  const modal = document.querySelector('[data-modal]');

  const columns = document.querySelector('[data-modal-columns]');
  const rows = document.querySelector('[data-modal-rows]');

  const time = document.querySelector('[data-modal-time]');
  const seconds = document.querySelector('[data-timer-seconds');
  const minutes = document.querySelector('[data-timer-minutes').innerHTML;
  const hours = document.querySelector('[data-timer-hours').innerHTML;

  columns.innerHTML = width;
  rows.innerHTML = height;


  // console.log('minutes', minutes);
  // setTimeout(() => {
  //   time.innerHTML = hours + minutes + seconds.innerHTML;
  // }, 10);
  time.innerHTML = hours + minutes + seconds.innerHTML;
  modal.classList.toggle('hidden');
}

