import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button[data-start]');
const daysField = document.querySelector('span[data-days]');
const hoursField = document.querySelector('span[data-hours]');
const minutesField = document.querySelector('span[data-minutes]');
const secondsField = document.querySelector('span[data-seconds]');
const date = Date.now();
let futureDate = 0;
buttonEl.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    futureDate = selectedDates[0].getTime();
    if (futureDate - date > 0) {
      buttonEl.removeAttribute('disabled');
    } else {
      alert('Please choose a date in the future');
    }
  },
};

flatpickr(inputEl, options);

buttonEl.addEventListener('click', handleBtnClick);

function handleBtnClick(event) {
  timerId = setInterval(timerHandler, 1000);
  event.target.setAttribute('disabled', 'true');
}

function timerHandler() {
  const date = Date.now();
  const sub = futureDate - date;
  if (sub < 1000) { clearInterval(timerId); }
  const timingObject = convertMs(sub);
  daysField.textContent = timingObject.days;
  hoursField.textContent = timingObject.hours;
  minutesField.textContent = timingObject.minutes;
  secondsField.textContent = timingObject.seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
