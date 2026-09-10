let cart = [];
 
 
// ADD TO CART
 
function addToCart(name, price, sizeId) {
 
    let size = document.getElementById(sizeId).value;
 
    if (size === "") {
 
        alert("Please select a shoe size 👟");
 
        return;
    }
 
 
    cart.push({
        name: name,
        price: price,
        size: size
    });
 
 
    document.getElementById("cartCount").innerText = cart.length;
 
    alert(name + " added to cart! 🛒☕");
 
}
 
 
 
// SHOW CART
 
function showCart() {
 
    let popup = document.getElementById("cartPopup");
 
    let items = document.getElementById("cartItems");
 
 
    popup.style.display = "flex";
 
 
    if (cart.length === 0) {
 
        items.innerHTML =
            "<p>Your cart is empty.</p>";
 
        return;
    }
 
 
    let html = "";
 
    let total = 0;
 
 
    cart.forEach(function(item, index) {
 
        html += `
            <div style="
                padding:15px 0;
                border-bottom:1px solid #ddd;
            ">
 
                <strong>${item.name}</strong>
 
                <br>
 
                Size: ${item.size}
 
                <br>
 
                ₹${item.price}
 
            </div>
        `;
 
 
        total += item.price;
 
    });
 
 
    html += `
        <h3 style="margin-top:20px;">
            Total: ₹${total}
        </h3>
    `;
 
 
    items.innerHTML = html;
 
}
 
 
 
// CLOSE CART
 
function closeCart() {
 
    document.getElementById("cartPopup").style.display = "none";
 
}
 
 
 
// CONTACT
 
function contactMessage() {
 
    alert(
        "Thank you for contacting Brew & Move! ☕👟"
    );
 
}
K-town — K-CULTUREを、ひと目で。
新大久保の韓国系レストラン、カフェ、グッズショップ、ヘアサロンなどを多言語で探せるKカルチャーガイドです。
 