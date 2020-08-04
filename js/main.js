//Hamburger icon functionality

// Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    slideout.toggle();
    // Do something else, like open/close menu
  });

//Slideout menu functionality

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('mobile-menu'),
  'padding': 256,
  'tolerance': 70,
  'side': 'right'
});