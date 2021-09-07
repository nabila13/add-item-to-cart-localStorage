const getLocalStorageCart = () => {
    const cart = getCart();
    for (const product in cart) {
        putItemOnList(product);
    }

}

const addCart = () => {
    const inputField = document.getElementById("input");
    const inputVal = inputField.value;
    if (!inputVal) {
        return;
    } else {
        putItemOnList(inputVal);
        addProductToCart(inputVal);
        inputField.value = "";
    }
};
const putItemOnList = name => {
    const list = document.getElementById("product-list");
    const li = document.createElement("li");
    li.innerText = name;
    list.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem("cart");
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
};
const addProductToCart = (name) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    } else cart[name] = 1;
    const stringified = JSON.stringify(cart);
    localStorage.setItem('cart', stringified);
};

const confirmOrder = () => {
    localStorage.removeItem('cart');
    document.getElementById("product-list").textContent = '';
}
getLocalStorageCart();