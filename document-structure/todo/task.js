const input = document.querySelector('.tasks__input');
const form = document.querySelector('form');
const list = document.querySelector('.tasks__list');

form.onkeydown = (event) => {
    if (event.key === 'Enter' && input.value !== '') {
        addTask(event);
    }
}

function addTask(event) {
    event.preventDefault();

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
