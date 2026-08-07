function updateCartCount() {

    const email = localStorage.getItem("email");

    let cart = [];

    if (email) {
        cart = JSON.parse(
            localStorage.getItem("cart_" + email)
        ) || [];
    }

    let totalItems = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
    });

    let badge = document.getElementById("cart-count");

    if (badge) {
        badge.innerText = totalItems;
    }
}

updateCartCount();