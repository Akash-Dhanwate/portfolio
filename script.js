// Scroll to products
function scrollToProducts() {
  document.getElementById('products').scrollIntoView({behavior: 'smooth'});
}

// Payment modal
function showPayment(product) {
  document.getElementById("paymentPopup").style.display = "flex";
  document.getElementById("popupTitle").innerText = "Buy " + product;
}

function closePayment() {
  document.getElementById("paymentPopup").style.display = "none";
}
