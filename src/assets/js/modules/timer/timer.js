export default function timer() {
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  const modal = document.querySelector("[data-modal-win-screen]");
  const secondsHolder = document.querySelector("[data-timer-seconds");
  const minutesHolder = document.querySelector("[data-timer-minutes");
  const hoursHolder = document.querySelector("[data-timer-hours");
  const buttonGenerate = document.querySelector("[data-generate-picross]");

  seconds++;

  let timer = setInterval(function () {
    if (!modal.classList.contains("hidden")) {
      clearInterval(timer);
    }
    buttonGenerate.addEventListener("click", () => {
      clearInterval(timer);
    });

    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);

    if (seconds == 60) {
      minutes = minutes + 1;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      minutesHolder.innerHTML = ":" + minutes + ":";
      seconds = 0;
    }

    if (minutes == 60) {
      minutes = "0" + 0;
      hours = hours + 1;
      if (hours < 10) {
        hours = "0" + hours;
      }
      minutesHolder.innerHTML = ":" + minutes + ":";
      hoursHolder.innerHTML = hours;
      seconds = 0;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    secondsHolder.innerHTML = seconds;

    if (!modal.classList.contains("hidden")) {
      secondsHolder.innerHTML = "00";
      minutesHolder.innerHTML = ":" + "00" + ":";
      hoursHolder.innerHTML = "00";
    }

    seconds++;
  }, 1000);
}
