const progressBar = document.querySelector('progress');
const form = document.querySelector('form');
const file = document.getElementById('file');
const url = 'https://netology-slow-rest.herokuapp.com/upload.php'


form.onsubmit = (e) => {
    e.preventDefault();
    const formSent = new FormData();
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
        progressBar.value = Math.round((event.loaded / event.total) * 100);
    }
    xhr.open('POST', url)
    xhr.send(formSent)

};

