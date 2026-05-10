// CART ARRAY
let cart = JSON.parse(localStorage.getItem("cart")) || [];  //dynamic array, if no item array is empty

// ORDER ARRAY
let orders = JSON.parse(localStorage.getItem("orders")) || [];


// NAVIGATION
function goToShopping(){
    window.location.href = "shopping.html";
}
/*
function goToProfile(){
    window.location.href = "profile.html";
}*/

function goToCart(){
    window.location.href = "cart.html";
}


// ADD TO CART
function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));  // JSON Stringify is a method in JavaScript that converts JavaScript objects into JSON strings.
    alert("Item added to cart!");
}


// REMOVE FROM CART
function removeFromCart(index){

    cart.splice(index, 1);  // remove item

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item removed!");

    location.reload(); // refresh page
}


// DISPLAY CART
if(document.getElementById("cartList")){

    let list = document.getElementById("cartList");
    let total = 0;

    if(cart.length === 0){  //items ellandre 
        list.innerHTML = "<p>Cart is empty</p>";
    }

    cart.forEach((item, index) => {  //if items edre 

        let li = document.createElement("li");

        li.textContent = item.name + " - " + item.price;

        // REMOVE BUTTON
        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = function(){
            removeFromCart(index);
        };

        li.appendChild(btn);

        list.appendChild(li);

        total += item.price;
    });

    document.getElementById("total").textContent = "Total = " + total;
}

function loadCartPage(){

    let list = document.getElementById("cartList");
    let total = 0;

    list.innerHTML = "";

    if(cart.length === 0){
        list.innerHTML = "<p>Cart is empty</p>";
        document.getElementById("total").textContent = "";
        return;
    }

    cart.forEach((item, index) => {

        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.price;

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = function(){
            removeFromCart(index);
        };

        li.appendChild(btn);
        list.appendChild(li);

        total += item.price;
    });

    document.getElementById("total").textContent = "Total = " + total;
}

// CHECKOUT
function checkout(){

    alert("Checkout clicked"); // DEBUG

    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }

    orders = orders.concat(cart);
    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");
    cart = [];

    alert("Order placed successfully!");

    loadCartPage();
}


// DISPLAY ORDERS
if(document.getElementById("orderList")){

    let list = document.getElementById("orderList");

    if(orders.length === 0){
        list.innerHTML = "<p>No orders yet</p>";
    }

    orders.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.price;
        list.appendChild(li);
    });
}


/*| Function       | Purpose         |
| ---------------- | --------------- |
| JSON.stringify() | Object → String |
| JSON.parse()     | String → Object |          */
