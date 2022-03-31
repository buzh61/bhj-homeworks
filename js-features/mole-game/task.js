const winCount = document.getElementById('dead');
const loseCount = document.getElementById('lost');
let winCountNum = Number(winCount.textContent);
let loseCountNum = Number(loseCount.textContent);


for (let i = 1; i < 9; i++) {
    let holes = document.getElementById(`hole${i}`);
    holes.onclick = function () {
        if (holes.className === 'hole hole_has-mole') {
            winCount.textContent = winCountNum += 1;
        } else {
            loseCount.textContent = loseCountNum += 1;
        }
        checkStatus();
    };
}

function checkStatus() {
    if (winCountNum === 10) {
        winCount.textContent = 0;
        loseCount.textContent = 0;
        alert('Вы победили!');
    } else if (loseCountNum === 5) {
        winCount.textContent = 0;
        loseCount.textContent = 0;
        alert('Вы проиграли!');
    }
}
