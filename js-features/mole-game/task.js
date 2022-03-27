let winCount = document.getElementById('dead'),
    loseCount = document.getElementById('lost'),
    winCountNum = Number(winCount.textContent),
    loseCountNum = Number(loseCount.textContent);


for (let i = 1; i < 9; i++) {
    let holes = document.getElementById(`hole${i}`);
    holes.onclick = function() {
        if (holes.className === 'hole hole_has-mole'){
            winCount.textContent = winCountNum += 1;
        } else {
            loseCount.textContent = loseCountNum += 1;
        }
        checkStatus();
    };
}

function checkStatus() {
    if (winCountNum === 10){
        alert('Вы победили!');
    } else if (loseCountNum === 5) {
        alert('Вы проиграли!');
    }
}
