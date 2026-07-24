let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelectorAll(".add-wishlist").forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        let product = {

            name: this.dataset.name,
            price: Number(this.dataset.price),
            image: this.dataset.image

        };

        let exists = wishlist.find(item => item.name === product.name);

        if (!exists) {

            wishlist.push(product);

            localStorage.setItem("wishlist", JSON.stringify(wishlist));

            updateWishlistCount();

            alert("Added to Wishlist ❤️");

        } else {

            alert("Already in Wishlist");

        }

    });

});

function updateWishlistCount() {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    document.getElementById("wishlist-count").innerText = wishlist.length;

}

updateWishlistCount();