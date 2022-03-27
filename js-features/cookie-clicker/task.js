let cookie = document.getElementById('cookie'),
    counterElement = document.getElementById('clicker__counter'),
    count = Number(counterElement.textContent),
    speedTimerElement = document.getElementById('speed__counter'),
    startTime;

cookie.onclick = () => {
    getAverageSpeed();
    addCount();
};

function addCount() {
    counterElement.textContent = count += 1;
    if (cookie.width === 200) {
        cookie.width = 230;
    } else {
        cookie.width = 200;
    }
}
function getAverageSpeed(){
    if (count === 0){
        startTime = new Date().getTime();
    } else {
        let average = ((new Date().getTime() - startTime) / 1000) / count;
        speedTimerElement.textContent = average.toFixed(2);
    }
}
