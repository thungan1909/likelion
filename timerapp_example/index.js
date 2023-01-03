const $ = document.querySelector.bind(document);

const timerDisplay = $(".timer-display");
const playBtn = $("#play");
// const playIcon = playBtn.childNodes[1];
const pauseBtn = $("#pause");
const stopBtn = $("#stop");
pauseBtn.style.display = "none";

let hour = 0,
  min = 0,
  sec = 0,
  clearTime;

function updateTimer() {
  sec++;

  if (sec === 60) {
    sec = 0;
    min++;
  }

  if (min === 60) {
    min = 0;
    hour++;
  }

  let secs = sec < 10 ? "0" + sec : sec;
  let mins = min < 10 ? "0" + min : min;
  let hours = hour < 10 ? "0" + hour : hour;

  timerDisplay.innerHTML = `${hours}:${mins}:${secs}`;

  clearTime = setTimeout(updateTimer, 1000);
}

playBtn.addEventListener("click", function () {
  updateTimer();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

function pauseFn() {
  clearTimeout(clearTime);
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
}

pauseBtn.addEventListener("click", pauseFn);

stopBtn.addEventListener("click", function () {
  pauseFn();
  (sec = 0), (min = 0), (hour = 0);
  timerDisplay.innerHTML = "00:00:00";
});
