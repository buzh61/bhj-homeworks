const links = Array.from(document.querySelectorAll('a.has-tooltip'))

for (let i in links) {
    links[i].onclick = (el) => {
        el.preventDefault();
        deleteActiveTooltips();
        createTooltip(links[i])
        setTooltipPosition(links[i], 'left')
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

function setTooltipPosition(parent, value) {
    const tooltip = document.querySelector('.tooltip')
    tooltip.setAttribute('data-position', value);

    let width = parent.offsetWidth;
    let height = parent.offsetHeight;

    if (value === 'top') {
        tooltip.style.bottom = `${height}px`;
        console.log(1)
    } else if (value === 'bottom') {
        tooltip.style.top = `${height}px`;
    } else if (value === 'left') {
        tooltip.style.right = `${width}px`;
        tooltip.style.top = `0`;
    } else if (value === 'right') {
        tooltip.style.left = `${width}px`;
        tooltip.style.top = `0`;
    }
}