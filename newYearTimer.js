const monthEl = document.querySelector('[data-js-timer="months"]');
const daysEl = document.querySelector('[data-js-timer="days"]');
const hoursEl = document.querySelector('[data-js-timer="hours"]');
const minutesEl = document.querySelector('[data-js-timer="minutes"]');
const secondsEl = document.querySelector('[data-js-timer="seconds"]');


function toTheNewYear(time) {

  const currentYear = new Date().getFullYear();
  const theEndOfThisYear = new Date(currentYear, 11, 31, 23, 59, 59);

  const interval = setInterval(() => {
    const now = new Date();

      const calcDates = theEndOfThisYear - now;

      let totalSeconds = Math.floor(calcDates / 1000);
      let months = (theEndOfThisYear.getFullYear() - now.getFullYear()) * 12 +
        (theEndOfThisYear.getMonth() - now.getMonth());

      if (theEndOfThisYear.getDate() < now.getDate()) {
        months -= 1;
      }
      let days = Math.floor(totalSeconds / 86400);
      let hours = Math.floor((totalSeconds % 86400) / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;

      monthEl.textContent = months.toString().padStart(2, '0');
      daysEl.textContent = days;
      hoursEl.textContent = hours.toString().padStart(2, '0');
      minutesEl.textContent = minutes.toString().padStart(2, '0');
      secondsEl.textContent = seconds.toString().padStart(2, '0');

      if (calcDates <= 0) {
        clearInterval(interval);
        daysEl.textContent = "000";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }
  }, 1000)
}

toTheNewYear()