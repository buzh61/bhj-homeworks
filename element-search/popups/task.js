const modalWindow = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('div.modal__close');
const allModalClose = Array.from(modalClose)
const modalSuccessButton = document.querySelector('.show-success');
const modalSuccessWindow = document.getElementById('modal_success');

modalWindow.classList.add('modal_active');

for (let i in allModalClose){
    modalClose[i].onclick = () => {
        modalClose[i].closest('.modal_active').classList.remove('modal_active');
    }
}

modalSuccessButton.onclick = () => {
    modalWindow.classList.remove('modal_active');
    modalSuccessWindow.classList.add('modal_active');
}

