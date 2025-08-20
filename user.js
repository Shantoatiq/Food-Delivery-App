// User Authentication & Cart
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = null;
let cart = [];

function showLogin() {
  alert("Login/Register modal will appear here.");
}

function registerUser(username, password) {
  users.push({ username, password, orders: [] });
  localStorage.setItem("users", JSON.stringify(users));
  alert("User registered!");
}

function loginUser(username, password) {
  let user = users.find(u => u.username === username && u.password === password);
  if (user) {
    currentUser = user;
    alert("Login successful!");
  } else {
    alert("Invalid credentials!");
  }
}

function addToCart(item) {
  cart.push(item);
  alert(item.name + " added to cart!");
}

function checkout() {
  if (!currentUser) {
    alert("Login first!");
    return;
  }
  currentUser.orders.push(cart);
  localStorage.setItem("users", JSON.stringify(users));
  cart = [];
  alert("Order placed successfully!");
}
