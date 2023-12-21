window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let miliseconds = 0;
    let appendMinutes = document.querySelector('#minutes');
    let appendMiliseconds = document.querySelector('#miliseconds');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;

    const startTimer = () => {
      miliseconds++;
      if (miliseconds <= 9) {
        appendMiliseconds.innerHTML = '0' + miliseconds;
      }
      if (miliseconds > 9) {
        appendMiliseconds.innerHTML = miliseconds;
      }

      if (miliseconds > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds;
        miliseconds = 0;
        appendMiliseconds.innerHTML = '0' + 0;
      }

      if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
      }

      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = '0' + minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
      }
    };

    startBtn.onclick = () => {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
      clearInterval(Interval);
    };

    resetBtn.onclick = () => {
      clearInterval(Interval);
      miliseconds = '00';
      seconds = '00';
      minutes = '00';
      appendMiliseconds.innerHTML = miliseconds;
      appendSeconds.innerHTML = seconds;
      appendMinutes.innerHMTL = minutes;
    };
  };