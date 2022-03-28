let links = document.querySelectorAll('.menu__link');
let arrLinks = Array.from(links);

for (let i in arrLinks) {
    arrLinks[i].onclick = () => {
        let linksWithSub = arrLinks[i].closest('li').querySelector('.menu_sub');
        if (linksWithSub){
            close();
            linksWithSub.classList.add('menu_active');
            return false;
        }
    }
}

function close() {
    let activeMenu = document.getElementsByClassName('menu_active')
    let arr = Array.from(activeMenu)
    for (let i in arr) {
        if (arr) {
            arr[i].classList.remove('menu_active')
        }
    }
}