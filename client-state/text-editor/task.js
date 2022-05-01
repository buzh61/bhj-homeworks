const editor = document.getElementById('editor');
const button = document.getElementById('btn');

editor.value = localStorage.getItem('text');
editor.onkeyup = () => {
    localStorage.setItem('text', editor.value);
}

button.onclick = () => {
    editor.value = '';
    localStorage.removeItem('text')
}
