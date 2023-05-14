document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.querySelector('input[data-name="billing-checkbox"]');
  var addressContainer = document.getElementById('address_container');

  if (checkbox && addressContainer) {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        addressContainer.style.display = 'none';
      } else {
        addressContainer.style.display = 'block';
      }
    });

    // Check the checkbox initially
    checkbox.checked = true;
    addressContainer.style.display = 'none';
  }
});