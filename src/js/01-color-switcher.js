const bodyEl = document.querySelector('body'); 
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
let timerId = null;

startBtnEl.addEventListener('click', handleStartBtnClick);

function handleStartBtnClick(event) {
    timerId = setInterval(timerHandler, 1000);
    console.log(event.target);
}

function timerHandler() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}

stopBtnEl.addEventListener('click', handleStopBtnClick);

function handleStopBtnClick() {
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}