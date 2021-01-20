export default function timer() {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let modal = document.querySelector('[data-modal]')
  const buttonGenerate = document.querySelector('[data-generate-picross]');
  
  seconds++;

  let timer = setInterval(function () {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);

    if (seconds == 60) {
      minutes = minutes + 1;
      document.querySelector('[data-timer-minutes]').innerHTML = ":" + minutes + ":";
      seconds = 0;
    }
    if (minutes == 60) {
      hours = hours + 1;
      document.querySelector('[data-timer-hours]').innerHTML = hours;
      minutes = 0;
      seconds = 0;
    }

    if (seconds < 10 || seconds == 0) {
      seconds = '0' + seconds;
    }

    if (minutes < 10 || minutes == 0) {
      minutes = '0' + minutes;
    }

    if (hours < 10 || hours == 0) {
      hours = '0' + hours;
    }

    document.querySelector('[data-timer-seconds]').innerHTML = seconds;

    if (!(modal.classList.contains('hidden'))) {
      clearInterval(timer);
    }

    seconds++;

  }, 1000);

  buttonGenerate.addEventListener('click', () => {
    clearInterval(timer);
  })
}

// timer();
