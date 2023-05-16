document.addEventListener('DOMContentLoaded', function() {
  var parentElement = document.querySelector('#CartDrawer');
  if (parentElement) {
    parentElement.addEventListener('click', function(e) {
      if (e.target.matches('#CartDrawer-Checkout')) {
        e.preventDefault();
        fetch('/cart.js')
          .then(response => response.json())
          .then(data => {
            var firstItem = data.items[0];
            var redirectUrl;

            if (firstItem && firstItem.product_id == '8266162635035') {
              redirectUrl = 'https://pay.leamoreau.co/hair-extensions/checkout';
            } else if (firstItem && firstItem.product_id == '8272355885339') {
              redirectUrl = 'https://pay.leamoreau.co/trimmer/checkout';
            }
            // Add more conditions for additional products as needed

            if (redirectUrl) {
              var variantName = firstItem.variant_title;
              window.location.href = redirectUrl + '?variant=' + encodeURIComponent(variantName);
            } else {
              window.location.href = '/checkout';
            }
          })
          .catch(error => console.error('Error:', error));
      }
    });
  }
});
