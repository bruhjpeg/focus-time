const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonSet = document.querySelector(".set");
const buttonStop = document.querySelector(".stop");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timerTimerOut;

buttonPlay.addEventListener("click", cliqueiButtonPlay);
buttonPause.addEventListener("click", cliqueiButtonPause);
buttonStop.addEventListener("click", cliqueiButtonStop);
buttonSoundOn.addEventListener("click", cliqueiButtonSoundOn);
buttonSoundOff.addEventListener("click", cliqueiButtonSoundOff);
buttonSet.addEventListener("click", horarioSet);

function resetControls() {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  buttonStop.classList.add("hide");
  buttonSet.classList.remove("hide");
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timerTimerOut);
}

function countdown() {
  timerTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0) {
      cliqueiButtonStop();
      return;
    }

    if (seconds <= 0) {
      seconds = 2;
      --minutes;
    }
    updateTimerDisplay(minutes, String(seconds - 1));

    countdown();
  }, 1000);
}

function cliqueiButtonPlay() {
  buttonPlay.classList.toggle("hide");
  buttonPause.classList.toggle("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  countdown();
}

function cliqueiButtonPause() {
  buttonPause.classList.toggle("hide");
  buttonPlay.classList.toggle("hide");
  clearTimeout(timerTimerOut);
}

function cliqueiButtonStop() {
  resetControls();
  resetTimer();
}

function cliqueiButtonSoundOn() {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
}

function cliqueiButtonSoundOff() {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
}

function horarioSet() {
  let newMinutes = prompt("Quantos minutos?");
  if (!newMinutes) {
    resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
}
