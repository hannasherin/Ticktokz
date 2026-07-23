let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.getElementById("cartItems");

let total = 0;

cart.forEach((item, index) => {

   total += Number(item.price.replace(/,/g, "")) * item.quantity;

    cartItems.innerHTML += `

    <div class="card mb-2">

        <div class="row p-3">

            <div class="col-md-3">

                <img src="${item.image}" class="img-fluid">

            </div>

            <div class="col-md-6">

                <h4>${item.name}</h4>

                <h5>₹${item.price}</h5>

                <p>Quantity : ${item.quantity}</p>

            </div>

            <div class="col-md-3">

                <button class="btn btn-danger"
                onclick="removeItem(${index})">

                Remove

                </button>

            </div>

        </div>

    </div>

    `;

});

cartItems.innerHTML += `

<h3 class="text-end">

Total : ₹${total}

</h3>

`;

// remove function 
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();

}