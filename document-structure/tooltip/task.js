const links = Array.from(document.querySelectorAll('a.has-tooltip'))

for (let i in links) {
    links[i].onclick = (el) => {
        el.preventDefault();
        if (links[i].querySelector('.tooltip_active')) {
            deleteActiveTooltips();
        } else {
            deleteActiveTooltips();
            createTooltip(links[i])
            setTooltipPosition(links[i])
        }
    }
}

function deleteActiveTooltips() {
    let active = Array.from(document.querySelectorAll('.tooltip_active'))
    for (let i in active) {
        active[i].remove();
    }
}

function createTooltip(el) {
    el.style.display = 'inline-block';
    el.style.position = 'relative';
    const tooltip = document.createElement('div');
    tooltip.textContent = el.getAttribute('title');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.style.position = 'absolute';
    tooltip.style.width = 'max-content';

    el.appendChild(tooltip)
}

function setTooltipPosition(el) {
    const tooltip = el.querySelector('.tooltip')
    const attribute = el.getAttribute('data-position');

    let width = el.offsetWidth;
    let height = el.offsetHeight;

    if (attribute === 'top') {
        tooltip.style.bottom = `${height}px`;
        console.log(1)
    } else if (attribute === 'bottom') {
        tooltip.style.top = `${height}px`;
    } else if (attribute === 'left') {
        tooltip.style.right = `${width}px`;
        tooltip.style.top = `0`;
    } else if (attribute === 'right') {
        tooltip.style.left = `${width}px`;
        tooltip.style.top = `0`;
    }
}

