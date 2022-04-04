const next = document.querySelector('.slider__arrow_next');
const prev = document.querySelector('.slider__arrow_prev');
const slides = document.querySelectorAll('.slider__item');
const slidesArr = Array.from(slides);
const dots = document.querySelectorAll('.slider__dot');
const dotsArr = Array.from(dots);

next.onclick = () => {
    nextSlide();
}

prev.onclick = () => {
    previousSlide();
}

for (let i = 0; i < dotsArr.length; i++) {
    dotsArr[i].onclick = () => {
        let slide = i + 1;
        currentSlide(slide);
    }
}

let index = 1;
arrowSlides(index);

function nextSlide() {
    index += 1;
    arrowSlides(index);
}

function previousSlide() {
    index -= 1;
    arrowSlides(index);
}

function currentSlide(n) {
    index = n;
    arrowSlides(index);
}

function arrowSlides(n) {

    if (n > slidesArr.length) {
        index = 1;
    } else if (n < 1) {
        index = slidesArr.length;
    }

    let activeSlideIndex = slidesArr.findIndex((element) => {
        return element.classList.contains('slider__item_active');
    })

    slidesArr[activeSlideIndex].classList.remove('slider__item_active');
    dotsArr[activeSlideIndex].classList.remove('slider__dot_active');

    slidesArr[index - 1].classList.add('slider__item_active');
    dotsArr[index - 1].classList.add('slider__dot_active');

}

