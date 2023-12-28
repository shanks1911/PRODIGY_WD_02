let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayHours = hours;
let displaySec = seconds;
let displayMins = minutes;
let displayMilisec = miliseconds;

let status = "stopped";

let interval = null;
let lapNow = null;

function start() {
  miliseconds++;

  if (miliseconds / 100 == 1) {
    seconds++;
    miliseconds = 0;
    if (seconds / 60 == 1) {
      minutes++;
      seconds = 0;
      if (minutes / 60 == 1) {
        hours++;
        minutes = 0;
      }
    }
  }

  if (miliseconds < 10) {
    displayMilisec = "0" +miliseconds;
  } else {
    displayMilisec = miliseconds;
  }

  if (seconds < 10) {
    displaySec = "0" +seconds;
  } else {
    displaySec = seconds;
  }

  if (minutes < 10) {
    displayMins = "0" +minutes;
  } else {
    displayMins = minutes;
  }
  if (hours < 10) {
    displayHours = "0" + hours;
  } else {
    displayHours = hours;
  }

  document.getElementById("timerHrs").innerHTML = displayHours;
  document.getElementById("timerSec").innerHTML = displaySec;
  document.getElementById("timerMins").innerHTML = displayMins;
  document.getElementById("timerMilisec").innerHTML = displayMilisec;
}

function startStop() {
  if (status === "stopped") {
    interval =window.setInterval(start, 10);
    status = "started";
    document.getElementById('startBtn').innerHTML = "Stop";
  } else {
    window.clearInterval(interval);
    status = "stopped";
    document.getElementById('startBtn').innerHTML = "Start";
  }
}

function reset(){
  window.clearInterval(interval);

  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayMilisec = 0;
  displayMins = 0;
  displaySec = 0;
  status = "stopped";
  document.getElementById('timerHrs').innerHTML = "00";
  document.getElementById('timerSec').innerHTML = "00";
  document.getElementById('timerMins').innerHTML = "00";
  document.getElementById('timerMilisec').innerHTML = "00";
  document.getElementById('lapRecord').innerHTML = "";

}

function lap(){
  lapNow = displayHours + " : " + displayMins + " : " + displaySec + " : " + displayMilisec
  document.getElementById('lapRecord').innerHTML = document.getElementById('lapRecord').innerHTML + "<p>" + lapNow + "</p>";
}
