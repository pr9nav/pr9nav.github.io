document.addEventListener('DOMContentLoaded', function() {
  var addToCartButtons = document.querySelectorAll('.add-to-cart-btn'); // Replace '.add-to-cart-btn' with the appropriate selector for your "Add to Cart" buttons

  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        var productID = button.dataset.productId; // Replace 'data-product-id' with the appropriate data attribute containing the product ID

        if (productID === '8266162635035') {
          window.location.href = 'https://pay.leamoreau.co/hair-extensions/checkout';
          return;
        }

        if (productID === '8272355885339') {
          window.location.href = 'https://pay.leamoreau.co/trimmer/checkout';
          return;
        }

        // Add more conditions for additional products as needed

        // Redirect to the default redirect URL if no specific product ID matches
        window.location.href = 'https://pay.leamoreau.co/redirect-url'; // Replace 'https://pay.leamoreau.co/redirect-url' with your desired redirect URL
      });
    });
  }
});
