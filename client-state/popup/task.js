const modalWindow = document.getElementById('subscribe-modal');
const modalClose = modalWindow.querySelector('div.modal__close');
console.log(getCookie('status'))

if (getCookie('status') !== 'closed') {
    modalWindow.classList.add('modal_active');
}

modalClose.onclick = () => {
    modalClose.closest('.modal_active').classList.remove('modal_active');
    setCookie('status', 'closed')
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith((name + '=')));
    return cookie.substr(name.length + 1)
}