const book = document.getElementById('book')

const fs = document.querySelectorAll('.book__control_font-size a');
const fsControls = Array.from(fs)

const fc = document.querySelectorAll('.book__control_color a');
const fcControls = Array.from(fc);

const bc = document.querySelectorAll('.book__control_background a');
const bcControls = Array.from(bc);

for (let i in fsControls) {
    fsControls[i].onclick = (item) => {
        const fsActive = document.querySelector('.font-size_active');
        const fsAttr = fsControls[i].getAttribute('data-size');

        item.preventDefault();
        fsActive.classList.remove('font-size_active');
        fsControls[i].classList.add('font-size_active');
        if (fsAttr) {
            book.classList.add('book_fs-'+fsAttr)
        } else {
            book.classList.remove('book_fs-big')
            book.classList.remove('book_fs-small')
        }
    }
}

for (let i in fcControls) {
    fcControls[i].onclick = (item) => {
        const fcActive = document.querySelector('.color_active');
        const fcAttr = fcControls[i].getAttribute('data-text-color');

        item.preventDefault();
        fcActive.classList.remove('color_active');
        fcControls[i].classList.add('color_active');

        book.classList.remove('book_color-gray');
        book.classList.remove('book_color-whitesmoke');
        book.classList.remove('book_color-black');
        book.classList.add('book_color-' + fcAttr);

    }
}

for (let i in bcControls) {
    bcControls[i].onclick = (item) => {
        const bcActive = document.querySelector('.color_active');
        const bcAttr = bcControls[i].getAttribute('data-bg-color');
        item.preventDefault();

        bcActive.classList.remove('color_active');
        bcControls[i].classList.add('color_active');

        book.classList.remove('book_bg-gray');
        book.classList.remove('book_bg-black');
        book.classList.remove('book_bg-white');
        book.classList.add('book_bg-' + bcAttr);

    }
}