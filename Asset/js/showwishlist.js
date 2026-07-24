
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.getElementById("wishlistItems");

let total = document.getElementById("wishlistTotal");

displayWishlist();

function displayWishlist(){

    if(wishlist.length==0){

        container.innerHTML=`

        <div class="text-center">

            <h3>Your Wishlist is Empty ❤️</h3>

            <a href="index.html" class="btn btn-dark mt-3">

                Shop Now

            </a>

        </div>

        `;

        total.innerHTML="0";

        return;

    }

    let html="";

    wishlist.forEach((item,index)=>{

        html+=`

        <div class="card mb-4">

            <div class="row align-items-center">

                <div class="col-md-2 text-center">

                    <img src="${item.image}" class="img-fluid">

                </div>

                <div class="col-md-6">

                    <h5>${item.name}</h5>

                    <p>₹${item.price}</p>

                </div>

                <div class="col-md-4 text-end">

                    <button

                    class="btn btn-danger"

                    onclick="removeWishlist(${index})">

                    Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    container.innerHTML=html;

    total.innerHTML=wishlist.length;

}

function removeWishlist(index){

    wishlist.splice(index,1);

    localStorage.setItem("wishlist",JSON.stringify(wishlist));

    displayWishlist();

}