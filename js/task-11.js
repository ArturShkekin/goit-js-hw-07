// Чужая версия  - рабочая
/*class CountdownTimer {
    constructor({
        selector,
        targetDate
    }) {
        this.targetDate = new Date(targetDate);
        this.daysSpan = document.querySelector(`${selector}.value[data-value="days"]`);
        this.hoursSpan = document.querySelector(`${selector}.value[data-value="hours"]`);
        this.minutesSpan = document.querySelector(`${selector}.value[data-value="mins"]`);
        this.secondsSpan = document.querySelector(`${selector}.value[data-value="secs"]`);
    }
    pad(value) {
        return String(value).padStart(2, "0");
    }
    countDowm() {
        const currentTime = new Date();
        this.createSpanValue(currentTime);
    }

    seeTime() {
        setInterval(() => this.countDowm(), 1000);
    }

    createSpanValue(currentTime) {
        const time = this.targetDate - currentTime;
        this.daysSpan = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        this.hoursSpan = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        this.minutesSpan = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.secondsSpan = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: "2021, 11, 11",
});

document.body.onload = startTimer;

function startTimer() {
    timer.seeTime();
}*/



// Моя версия  пока не рабочая

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. 
// Такой плагин может использоваться в блогах и интернет - магазинах,
// страницах регистрации событий, во время технического обслуживания и т.д.



/*const timer = document.createElement("div");
timer.classList.add("timer");
timer.id = "timer-1";
console.log(timer);


const timeMarkUp = createDiv(definitions);
timer.insertAdjacentHTML("beforeend", timeMarkUp);


function createDiv(definitions) {
  return definitions.map(({ value, label }) => {
      return `<div class="field"><span class="value" data-value="${value}">Math.floor((new Date('Jul 17, 2021').getTime() - (Date.now())) / (1000 * 60 * 60 * 24))</span>
    <span class="label">${label}</span></div>`;
  }).join("");
}


const date2030 = new Date('Jul 17, 2021');
//date2030.setHours(20);
//date2030.setMinutes(30);
//date2030.setSeconds(10);
const time2030 = date2030.getTime();

const now = Date.now();
const time = time2030 - now;

const days = Math.floor((new Date('Jul 17, 2021').getTime() - (Date.now())) / (1000 * 60 * 60 * 24));
console.log(days);
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);
const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
console.log(minutes);
const seconds = Math.floor((time % (1000 * 60)) / 1000);
console.log(seconds);

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});


<div class="timer" id="timer-1">
  <div class="field">
    <span class="value" data-value="days">11</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">11</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">11</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs">11</span>
    <span class="label">Seconds</span>
  </div>
</div>*/