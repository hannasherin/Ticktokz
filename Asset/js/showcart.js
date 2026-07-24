let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

function displayCart() {

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <h3 class="text-center mt-5">Your Cart is Empty</h3>
        `;

        totalPrice.innerHTML = "₹0";

        return;
    }

    cart.forEach((item, index) => {

        let subtotal = Number(item.price) * item.quantity;

        total += subtotal;

        cartItems.innerHTML += `

        <div class="card mb-3 p-3 shadow-sm">

            <div class="row align-items-center">

                <div class="col-md-2 text-center">
                    <img src="${item.image}" class="img-fluid" style="height:120px;">
                </div>

                <div class="col-md-3">
                    <h5>${item.name}</h5>
                    <p>₹${Number(item.price).toLocaleString("en-IN")}</p>
                </div>

                <div class="col-md-3">

                    <button class="btn btn-outline-dark"
                        onclick="decreaseQuantity(${index})">-</button>

                    <span class="mx-3 fw-bold">${item.quantity}</span>

                    <button class="btn btn-outline-dark"
                        onclick="increaseQuantity(${index})">+</button>

                </div>

                <div class="col-md-2">
                    <h5>₹${subtotal.toLocaleString("en-IN")}</h5>
                </div>

                <div class="col-md-2">

                    <button class="btn btn-danger"
                        onclick="removeItem(${index})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    totalPrice.innerHTML = "₹" + total.toLocaleString("en-IN");
}

function increaseQuantity(index) {

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

    displayCart();
}

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();

    displayCart();
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

          updateCartCount();


    displayCart();
}

displayCart();
