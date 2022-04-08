const tabs = document.querySelectorAll('.tab');
const tabsArr = Array.from(tabs)
const contents = document.querySelectorAll('.tab__content');
const contentsArr = Array.from(contents);

    for (let i in tabsArr) {
        tabsArr[i].onclick = () => {
            deactivate();
            tabsArr[i].classList.add('tab_active');
            contentsArr[i].classList.add('tab__content_active');
        }
    }

function deactivate() {
    const activeTab = document.querySelector('.tab_active');
    const activeContent = document.querySelector('.tab__content_active');

    activeTab.classList.remove('tab_active');
    activeContent.classList.remove('tab__content_active');
}
