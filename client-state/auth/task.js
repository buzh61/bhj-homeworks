const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const welcomeID = document.querySelector('#user_id');
const activeUser = localStorage.getItem('user_id');

if (activeUser) {
    welcome.classList.add('welcome_active');
    welcomeID.textContent = activeUser;
}

form.onsubmit = (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.open('POST', url)
    xhr.responseType = 'json';
    xhr.send(formData)

    console.log(xhr)

    xhr.onreadystatechange = () => {
        const request = xhr.response;
        if (xhr.readyState === xhr.DONE) {
            if (request['success']) {
                localStorage.setItem('user_id', request['user_id'])
                welcome.classList.add('welcome_active');
                welcomeID.textContent = request['user_id'];
            } else {
                const inputs = Array.from(document.querySelectorAll('input'));
                for (let i in inputs) {
                    inputs[i].value = '';
                }

                welcome.classList.add('welcome_active');
                welcome.textContent = 'Неверный логин/пароль';
            }
        }
    }
}



