let checkboxes = Array.from(
    document.querySelectorAll('input'));

for (const i in checkboxes) {
    checkboxes[i].onclick = () => {
        test(checkboxes[i])
        checkChild(checkboxes[i])
    }
}

function checkChild(key) {
    try {
        let child = Array.from(key
            .closest('li')
            .querySelector('ul')
            .querySelectorAll('input[type=checkbox]'));

        for (let k in child) {
            key.checked ? child[k].checked = true : child[k].checked = false;
        }


    } catch {

    }
}

function test(i) {
    try {
        let parentElement = i.closest('ul').closest('li');
        let parentMainInput = parentElement.querySelector('label > input');
        let parentAllNestedInputs = Array.from(parentElement.querySelector('ul').querySelectorAll('li > label > input'));
        let parentCheckedNestedInputs = Array.from(parentElement.querySelector('ul').querySelectorAll('li > label > input:checked'));

        if (parentAllNestedInputs.length === parentCheckedNestedInputs.length) {
            parentMainInput.indeterminate = false;
            parentMainInput.checked = true;
        } else if (parentAllNestedInputs.length !== parentCheckedNestedInputs.length && parentCheckedNestedInputs.length !== 0) {
            parentMainInput.indeterminate = true;
        }
    } catch {

    }
}
