
document.querySelectorAll(".add-wishlist").forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();


        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {
            alert("Please login first to add products to your wishlist.");
            window.location.href = "login.html";
            return;
        }


        // Get logged-in user's email
        const email = localStorage.getItem("email");


        let wishlist =
            JSON.parse(localStorage.getItem("wishlist_" + email)) || [];


        let product = {

            name: this.dataset.name,
            price: Number(this.dataset.price),
            image: this.dataset.image

        };

        let exists = wishlist.find(item => item.name === product.name);

        if (!exists) {

            wishlist.push(product);

            localStorage.setItem("wishlist_" + email, JSON.stringify(wishlist))
            updateWishlistCount();

            alert("Added to Wishlist ❤️");

        } else {

            alert("Already in Wishlist");

        }

    });

});

function updateWishlistCount() {

    const email = localStorage.getItem("email");

    if (!email) {
        document.getElementById("wishlist-count").innerText = 0;
        return;
    }

    let wishlist =
        JSON.parse(localStorage.getItem("wishlist_" + email)) || [];

    document.getElementById("wishlist-count").innerText =
        wishlist.length;
}

updateWishlistCount();