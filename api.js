// Fake API Endpoints Simulation

function getProducts() {
  return database.products;
}

function createOrder(order) {
  database.orders.push(order);
  return { success: true, message: "Order created" };
}

function getOrders() {
  return database.orders;
}

function deleteProduct(name) {
  database.products = database.products.filter(p => p.name !== name);
  return { success: true, message: "Product deleted" };
}
