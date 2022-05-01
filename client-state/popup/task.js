const modalWindow = document.getElementById('subscribe-modal');
const modalClose = modalWindow.querySelector('div.modal__close');

if (localStorage.getItem('status') !== 'closed') {
    modalWindow.classList.add('modal_active');
}

modalClose.onclick = () => {
    modalClose.closest('.modal_active').classList.remove('modal_active');
    localStorage.setItem('status', 'closed')
}
