import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button[data-start]');
const daysField = document.querySelector('span[data-days]');
const hoursField = document.querySelector('span[data-hours]');
const minutesField = document.querySelector('span[data-minutes]');
const secondsField = document.querySelector('span[data-seconds]');
const startDate = Date.now();
let futureDate = 0;
const timerId = null;

buttonEl.setAttribute('disabled', 'true');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    futureDate = selectedDates[0].getTime();
    if (futureDate - startDate > 1000) {
      buttonEl.removeAttribute('disabled');
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
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
  const currentTime = Date.now();
  const deltaTime = futureDate - currentTime;
  if (deltaTime < 1000) {
    clearInterval(timerId);
  }
  const timingObject = convertMs(deltaTime);
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
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const timerEl = document.querySelector('.timer');
const fieldEls = document.querySelectorAll('.field');
const valueEls = document.querySelectorAll('.value');

timerEl.style.marginTop = '20px';
timerEl.style.display = 'flex';
timerEl.style.gap = '10px';

fieldEls.forEach(fieldEl => {
  fieldEl.style.display = 'flex';
  fieldEl.style.flexDirection = 'column';
  fieldEl.style.alignItems = 'center';
});

valueEls.forEach(valueEl => {
  valueEl.style.fontSize = '30px';
});
