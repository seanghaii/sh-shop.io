// Your existing JavaScript code

// Function to open the shopping cart sidebar
function openNav() {
  document.getElementById("cartSidebar").style.width = "250px";
}

// Function to close the shopping cart sidebar
function closeNav() {
  document.getElementById("cartSidebar").style.width = "0";
}

// Function to add item to the shopping cart
function addToCart(productName, price) {
  // Create a new item element
  var newItem = document.createElement("div");
  newItem.innerHTML = productName + " - $" + price;

  // Append the item to the cart
  document.getElementById("cartItems").appendChild(newItem);

  // Update the total price
  updateTotal(price);
}

// Function to update the total price in the shopping cart
function updateTotal(price) {
  // Get the current total
  var currentTotal = parseFloat(document.getElementById("cartTotal").innerText.replace("Total: $", ""));

  // Add the price of the new item to the total
  currentTotal += parseFloat(price);

  // Update the total in the cart
  document.getElementById("cartTotal").innerText = "Total: $" + currentTotal.toFixed(2);
}
