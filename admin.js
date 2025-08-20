// Admin Authentication & Management
let admins = [{ username: "admin", password: "1234" }];
let currentAdmin = null;

function adminLogin(username, password) {
  let admin = admins.find(a => a.username === username && a.password === password);
  if (admin) {
    currentAdmin = admin;
    alert("Admin logged in!");
  } else {
    alert("Invalid admin credentials!");
  }
}

function addProduct(product) {
  database.products.push(product);
  alert("Product added!");
}

function removeProduct(productName) {
  database.products = database.products.filter(p => p.name !== productName);
  alert("Product removed!");
}

function viewOrders() {
  console.log("Orders:", database.orders);
}
