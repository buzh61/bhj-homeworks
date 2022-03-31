const timerElement = document.getElementById('timer');
const hours = 0;
const minutes = 0;
let seconds = Number(timerElement.textContent);
const date = new Date();

function decreaseTime() {
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    date.setMilliseconds(0);
    timerElement.textContent = date.toTimeString().split(" ")[0];

    if (seconds > 0) {
        seconds -= 1;
    } else {
        return location.assign('https://go64.ru/upload/quickly/news1765.jpg')
    }
}

decreaseTime();
setInterval(decreaseTime, 1000)