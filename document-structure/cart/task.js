const qtyControls = Array.from(document.querySelectorAll('.product__quantity-control'));
const addBtn = Array.from(document.querySelectorAll('.product__add'));


for (let i in qtyControls) {
    qtyControls[i].onclick = () => {
        changeQty(qtyControls[i]);
    }
}

for (let i in addBtn) {
    addBtn[i].onclick = () => {
        addToCart(addBtn[i]);
    }
}


function changeQty(el) {
    const qtyValue = el.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    let count = Number(qtyValue.textContent);
    if (el.classList.contains('product__quantity-control_dec') && count > 1) {
        count -= 1;
    } else if (el.classList.contains('product__quantity-control_inc')) {
        count += 1;
    }
    qtyValue.textContent = count;
}

function addToCart(el) {
    let id = el.closest('.product').getAttribute('data-id');
    let img = el.closest('.product').querySelector('img');
    let qty = Number(el.closest('.product__controls').querySelector('.product__quantity-value').textContent.trim());
    let cartProducts = Array.from(document.querySelectorAll('.cart__product'));
    console.log(cartProducts)

    let count = document.createElement('div');
    count.classList = 'cart__product-count';
    count.textContent = qty;

    let product = document.createElement('div');
    product.classList = 'cart__product';
    product.setAttribute('data-id', id);
    product.append(img.cloneNode(true))
    product.append(count)
    let cart = document.querySelector('.cart__products');

    let productIndex = cartProducts.findIndex((item) => {
        return item.getAttribute('data-id') === id;
    })

    if (productIndex >= 0) {
        let currentCount = cartProducts[productIndex].querySelector('.cart__product-count')
        let currentCountNum = Number(currentCount.textContent)
        currentCountNum += qty;
        currentCount.textContent = currentCountNum;
    } else {
        cart.append(product);
    }
}