
let buttons = document.querySelectorAll(".add-cart");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.preventDefault();


        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {
            alert("Please login first to add products to your Cart.");
            window.location.href = "login.html";
            return;
        }

const email = localStorage.getItem("email");


let cart =JSON.parse(localStorage.getItem("cart_" + email)) || [];

        let product = {

            name: this.dataset.name,

            price: this.dataset.price,

            image: this.dataset.image,

            quantity: 1

        };

        let existingProduct = cart.find(item => item.name === product.name);

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push(product);

        }

localStorage.setItem("cart_" + email,JSON.stringify(cart));



        updateCartCount();

        alert("Product Added Successfully");

    });

});