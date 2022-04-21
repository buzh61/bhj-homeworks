let widget = document.querySelector('.chat-widget');
let input = document.querySelector('.chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');
let phrases = [
    'Дарова',
    'Кто там?',
    'Не особо интересно. Попробуйте ещё раз.',
    'Всё ещё не интересно, можете не писать.',
    'Рассказать анекдот?',
    'Много чего хотите.',
    'А сам как думаешь? Конечно же!'
];

let timer = false;


widget.onclick = () => {
    let message = document.querySelector('.message');

    widget.classList.add('chat-widget_active');

    if (!timer && !message) {
        timer = setTimeout(() => {
            messages.innerHTML += `
            <div class="message">
                <div class="message__time">${getDate()}</div>
                <div class="message__text">Кого ждём?</div>
            </div>`;
            timer = true;
        }, 30000)
    }
}

input.onkeydown = (el) => {
    let randomPhrase = Math.floor(Math.random() * phrases.length);
    let chat = document.querySelector('.chat-widget__messages-container');

    clearTimeout(timer);

    if (el.key === 'Enter' && input.value !== '') {
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${getDate()}</div>
                <div class="message__text">${input.value}</div>
            </div>`;
        input.value = '';

        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${getDate()}</div>
                <div class="message__text">${phrases[randomPhrase]}</div>
            </div>`;

        chat.scrollTo(0, chat.scrollHeight)
    }

}

function getDate() {
    let date = new Date();
    return date.toLocaleTimeString().slice(0, -3);
}

