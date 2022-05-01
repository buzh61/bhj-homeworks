const url = 'https://netology-slow-rest.herokuapp.com/auth.php';
const form = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const welcomeID = document.querySelector('#user_id');
const activeUser = localStorage.getItem('user_id');
const signOut = document.querySelector('#signout__btn')

if (activeUser) {
    welcome.classList.add('welcome_active');
    welcomeID.textContent = activeUser;
}

signOut.onclick = () => {

}

form.onsubmit = (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.open('POST', url)
    xhr.send(formData)

    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            const info = JSON.parse(xhr.responseText);
            if (info['success']) {
                localStorage.setItem('user_id', info['user_id'])
                welcome.classList.add('welcome_active');
                welcomeID.textContent = info['user_id'];
            } else {
                welcome.classList.add('welcome_active');
                welcome.textContent = 'Неверный логин/пароль';
            }
        }
    }
}



