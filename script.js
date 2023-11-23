// script.js
let cartItems = 0;

function addToCart(productId) {
  cartItems++;
  updateCart();
}

function updateCart() {
  const cartLink = document.querySelector('#cart a');
  cartLink.textContent = `Корзина (${cartItems})`;
}

function showCart() {
  // Логика показа содержимого корзины
}