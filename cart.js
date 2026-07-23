let cart = JSON.parse(localStorage.getItem("cart")) || [];

let buttons = document.querySelectorAll(".add-cart");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

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

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Product Added Successfully");

    });

});