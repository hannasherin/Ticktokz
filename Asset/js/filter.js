let products = document.querySelectorAll(".product");

// Brand filter (checkbox)
document.querySelectorAll(".brand-filter").forEach(box => {
    box.addEventListener("change", filterProducts);
});

// Price filter (radio)
document.querySelectorAll(".price-filter").forEach(radio => {
    radio.addEventListener("change", filterProducts);
});

// Gender filter (radio)
document.querySelectorAll(".gender-filter").forEach(radio => {
    radio.addEventListener("change", filterProducts);
});

function filterProducts() {

    // Selected Brands
    let brands = [];

    document.querySelectorAll(".brand-filter:checked").forEach(item => {
        brands.push(item.value);
    });

    // Selected Price
    let selectedPrice = document.querySelector(".price-filter:checked")?.value || "all";

    // Selected Gender
    let selectedGender = document.querySelector(".gender-filter:checked")?.value || "all";

    products.forEach(product => {

        let brand = product.dataset.brand;
        let price = Number(product.dataset.price);
        let gender = product.dataset.gender;

        // Brand Filter
        let brandMatch =
            brands.length === 0 || brands.includes(brand);

        // Price Filter
        let priceMatch = true;

        if (selectedPrice === "10000") {
            priceMatch = price < 10000;
        }
        else if (selectedPrice === "50000") {
            priceMatch = price >= 10000 && price <= 50000;
        }
        else if (selectedPrice === "50001") {
            priceMatch = price > 50000;
        }

        // Gender Filter
        let genderMatch =
            selectedGender === "all" || gender === selectedGender;

        // Show / Hide Product
        if (brandMatch && priceMatch && genderMatch) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}
 
// gender filter 
const menRadio = document.getElementById("menRadio");
const womenRadio = document.getElementById("womenRadio");

if (menRadio) {
    menRadio.addEventListener("change", function () {
        window.location.href = "men.html";
    });
}

if (womenRadio) {
    womenRadio.addEventListener("change", function () {
        window.location.href = "women.html";
    });
}




