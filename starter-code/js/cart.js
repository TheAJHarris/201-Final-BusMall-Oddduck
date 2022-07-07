'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem('productInCart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    // TODO: Find the table body
  let tbody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  for (let i = 0;i < cart.items.length; i++) {
    let currentItem = cart.items[i];
    for (let j = 0; j < Product.allProducts.length; j++) {
      if (currentItem.product === Product.allProducts[j].name) {
        let filePath = Product.allProducts[j].filePath;
      }
    }
    // TODO: Create a TR
    let tableRow = document.createElement('tr')
    tbody.appendChild(tableRow)
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    let tableData = document.createElement('td')
    tableData.innerHTML = `<img src=${filePath}>`
    tableRow.appendChild(tableData)

  }

}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();