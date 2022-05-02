const items = document.getElementById('items');
const cache = localStorage.getItem('element')

if (cache) {
    items.innerHTML = cache;
    disableLoader();
} else {
    sendRequest();
}

function disableLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('loader_active')
}

function saveItem() {
    let resultHTML = items.innerHTML;
    localStorage.setItem('element', resultHTML)
}

function sendRequest() {
    const url = 'https://netology-slow-rest.herokuapp.com';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = () => {
        console.log(xhr.status)
        if (xhr.readyState === xhr.DONE) {
            const request = JSON.parse(xhr.responseText);
            const currencies = request['response']['Valute'];
            disableLoader()

            for (let i in currencies) {
                const item = document.createElement('div');
                item.classList.add('item');
                items.append(item)

                const code = document.createElement('div');
                code.classList.add('item__code');
                code.textContent = currencies[i]['CharCode'];
                item.append(code)

                const value = document.createElement('div');
                value.classList.add('item__value');
                value.textContent = currencies[i]['Value'];
                item.append(value)

                const name = document.createElement('div');
                name.classList.add('item__currency');
                name.textContent = 'руб.';
                item.append(name)

            }
            saveItem();
        } else {
            throw new Error("Ошибка!");
        }

    }

    xhr.send();
}
