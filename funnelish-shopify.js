document.addEventListener('DOMContentLoaded', function() {

  document.addEventListener('FunnelishCartFormLoaded', function(event) {
    var form = event.detail.form;
    if (form) {
      var variantBoxes = form.querySelectorAll('.pl-variant-options label');
      variantBoxes.forEach(function(variantBox) {
        variantBox.addEventListener('click', function(event) {
          event.preventDefault();
        });
      });


      variantBoxes.forEach(function(variantBox) {
        variantBox.classList.remove('selected');
      });
    }
  });

  var urlParams = new URLSearchParams(window.location.search);
  var variantNames = urlParams.get('variant');

  if (variantNames) {
    var variantArray = variantNames.split('/');

    var delay = 100; 
    setTimeout(function() {
      var variantBoxes = document.querySelectorAll('.pl-variant-options label');

      if (variantBoxes.length >= variantArray.length) {
        for (var i = 0; i < variantArray.length; i++) {
          var variantName = variantArray[i].trim();

          var matchingVariantBox = null;
          for (var j = 0; j < variantBoxes.length; j++) {
            var variantBox = variantBoxes[j];
            if (variantBox.textContent.trim() === variantName) {
              matchingVariantBox = variantBox;
              break;
            }
          }

          if (matchingVariantBox) {
            matchingVariantBox.classList.add('selected'); // Add a class to indicate selection

            var clickEvent = new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
              view: window
            });
            matchingVariantBox.dispatchEvent(clickEvent);
          } else {
            console.error('Variant box not found for name: ', variantName);
          }
        }
      } else {
        console.error('Number of variants and variant boxes do not match');
      }
    }, delay);
  }
});