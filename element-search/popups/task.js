let modalWindow = document.getElementById('modal_main'),
    modalClose = document.querySelector('div.modal__close'),
    modalSuccessButton = document.querySelector('.show-success'),
    modalSuccessWindow = document.getElementById('modal_success');

modalWindow.classList.add('modal_active');

modalClose.onclick = () => {
    modalWindow.classList.remove('modal_active');
}

modalSuccessButton.onclick = () => {
    modalWindow.classList.remove('modal_active');
    modalSuccessWindow.classList.add('modal_active');
}

