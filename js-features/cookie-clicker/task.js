const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');
let clickCount = Number(counterElement.textContent);


// Переменные для счетчика CPS

const speedCount = document.getElementById('speed__counter');
let cps = 0;
let clicks = 0;
let started = false;
let width
let ms = 0;

setInterval(() => {
    if (started) {
        ms += 10;
        cps = clicks / (ms / 1000);
    }
}, 10);

cookie.onclick = () => {
    if (!started) {
        started = true;
        return
    }
    changeSize();
    counterElement.textContent = clicks += 1;
    speedCount.textContent = cps.toFixed(2);
};

function changeSize() {
    if (cookie.width === 200) {
        cookie.width = 230
    } else {
        cookie.width = 200
    }
}











