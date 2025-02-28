// Task 1: Creating a Product Class
class Product {
    // Creating a class with product details 
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock; 
    }
    // Adding a method that returns a formatted string of product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    // Adding a method that modifies the stock level when an order is placed
    updateStock(quantity) {
        this.stock -= quantity
    }
}
// Test Cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"


// Task 2: Creating an Order Class 
class Order {
    // Creating Order class
    constructor(orderId, product, quantity) { 
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity); // Ensures stock is reduced when an order is created
    }
    // Adding a method that returns order details
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}"`;
    }
}
// Test Cases
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)


// Task 3: Creating an Inventory Class
class Inventory {
    // Creating an Inventory class with a property products
    constructor() {
        this.products = [];
        this.orders = []; // Task 4: Adding a orders array in the Inventory class
    }
    // Adding a method that adds a new product to inventory
    addProduct(product) {
        this.products.push(product);
    }
    // Adding a method that logs all products' details
    listProducts() {
        return this.products.forEach(product => console.log(product.getDetails()));
    }
    // Task 4: Adding a method that creates a new order and adds it to orders if stock is available
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            let order = new Order(orderId, product, quantity);
            this.orders.push(order); 
        } else {
            return `Insufficient stock!`;
        };
    }
    // Task 4: Adding a method that logs all placed orders
    listOrders() { 
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
    // Task 5: Adding a method that increase the stock of the product
    restockProduct(productId, quantity) {
        let product = this.products.find(product => product.id === productId); 
        if (product) {
            product.stock += quantity; 
        };
    }
}
// Test Cases
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"


// Task 4: Implementing Order Management
// Changes made in task 3 
// Test Cases
inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"


// Task 5: Implementing Product Restocking
// Changes made in task 3 
// Test Cases
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"
