const dropdownElements = document.querySelectorAll('.dropdown');
const dropdownElementsArr = Array.from(dropdownElements);

const allLinks = document.querySelectorAll('.dropdown__link');
const arrLinks = Array.from(allLinks);

// Выбранный вариант
const dropdownValues = document.querySelectorAll('.dropdown__value');
const dropdownValuesArr = Array.from(dropdownValues);

// Выпадающие списки
const dropdownLists = document.querySelectorAll('ul.dropdown__list');
const dropdownListsArr = Array.from(dropdownLists);

// Активное меню
const activeLists = document.querySelectorAll('.dropdown__list_active')
const activeListsArr = Array.from(activeLists)


for (let i in dropdownElementsArr) {
    dropdownElementsArr[i].onclick = () => {
        toggleDropdowns(i);
    }
}

for (let i in arrLinks) {
    arrLinks[i].onclick = (event) => {
        event.preventDefault();
        changeDropdownValue(i);
    }
}

function close() {
    for (let i in activeListsArr) {
        activeListsArr[i].classList.remove('dropdown__list_active')
    }
}

function toggleDropdowns(i) {
    if (dropdownListsArr[i].classList.contains('dropdown__list_active')) {
        close();
        dropdownListsArr[i].classList.remove('dropdown__list_active');
    } else {
        close();
        dropdownListsArr[i].classList.add('dropdown__list_active');
    }
}

function changeDropdownValue(i) {
    let parent = arrLinks[i]
        .closest('li')
        .closest('ul.dropdown__list')
        .closest('.dropdown')
        .querySelector('.dropdown__value');
    parent.textContent = arrLinks[i].textContent;
}
