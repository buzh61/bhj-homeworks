const rotator = document.querySelectorAll('.rotator');
const rotatorArr = Array.from(rotator);

const rotatorCase = document.querySelectorAll('.rotator__case');
const rotatorCaseArr = Array.from(rotatorCase);

for (let i in rotatorCaseArr) {
    rotatorCaseArr[i].style.color = rotatorCaseArr[i].getAttribute('data-color');
}

let speed = document.querySelector('.rotator__case_active').getAttribute('data-speed')

for (let i in rotatorArr) {
    function rotateElements() {
        let interval = setInterval(() => {
            const active = document.querySelector('.rotator__case_active');
            speed = active.getAttribute('data-speed')
            console.log(speed)
            if (active.nextElementSibling) {
                active.classList.remove('rotator__case_active')
                active.nextElementSibling.classList.add('rotator__case_active');
            } else {
                active.classList.remove('rotator__case_active')
                rotatorArr[i].firstElementChild.classList.add('rotator__case_active');
            }
            clearInterval(interval)
        }, speed)
    }
}
setInterval(rotateElements, speed)
