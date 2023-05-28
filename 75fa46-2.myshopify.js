document.addEventListener('DOMContentLoaded', function() {
  var parentElements = document.querySelectorAll('.cart__checkout-wrapper, .cart__item-row.cart__checkout-wrapper');

  parentElements.forEach(function(parentElement) {
    parentElement.addEventListener('click', function(e) {
      if (e.target.matches('.cart__checkout')) {
        e.preventDefault();
        fetch('/cart.js')
          .then(response => response.json())
          .then(data => {
            if (data.items.length > 1) {
              window.location.href = '/checkout';
            } else if (data.items.length === 1) {
              var firstItem = data.items[0];
              var redirectUrl;

              if (firstItem.product_id == '8300079120667') {
                redirectUrl = 'https://pay.modeholland.nl/checkout/checkout';
              } else if (firstItem.product_id == 'XXXXX') {
                redirectUrl = 'XXXXX';
              }
              // Add more conditions for additional products as needed

              if (redirectUrl) {
                var variantName = firstItem.variant_title;
                window.location.href = redirectUrl + '?variant=' + encodeURIComponent(variantName);
              } else {
                window.location.href = '/checkout';
              }
            } else {
              window.location.href = '/checkout';
            }
          })
          .catch(error => console.error('Error:', error));
      }
    });
  });
});
