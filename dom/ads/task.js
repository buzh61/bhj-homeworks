const rotator = document.querySelectorAll('.rotator');
const rotatorArr = Array.from(rotator);

for (let i in rotatorArr) {
    setInterval(() => {
        const active = document.querySelector('.rotator__case_active');

        active.classList.remove('rotator__case_active')

        if (active.nextElementSibling) {
            active.nextElementSibling.classList.add('rotator__case_active');
        } else {
            rotatorArr[i].firstElementChild.classList.add('rotator__case_active');
        }
    }, 1000)
}
