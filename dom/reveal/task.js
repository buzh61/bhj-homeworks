const reveals = document.querySelectorAll('.reveal');
const revealsArr = Array.from(reveals);


function isVisible(el) {
    const {top, bottom} = el.getBoundingClientRect()

    if (bottom < 0) return false;
    return top <= window.innerHeight;
}

revealsArr.forEach((el) => {
    setInterval(() => {
        if (isVisible(el)) {
            el.classList.add('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    }, 1000);
})



