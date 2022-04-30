const input = document.querySelector('.tasks__input');
const form = document.querySelector('form');
const list = document.querySelector('.tasks__list');


form.onsubmit = (event) => {
    event.preventDefault();
    if (input.value.trim() !== '') {
        addTask(event);
    }
}

function addTask() {
    let task = document.createElement('div');
    task.classList = 'task';

    let title = document.createElement('div')
    title.classList = 'task__title';

    title.textContent = input.value;
    let button = document.createElement('a');
    button.classList = 'task__remove';
    button.textContent = '×';
    button.setAttribute('href', '#');

    button.onclick = () => {
        button.closest('.task').remove()
    }

    task.appendChild(title);
    task.appendChild(button);
    list.appendChild(task);
    input.value = '';
}