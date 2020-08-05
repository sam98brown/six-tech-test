$( document ).ready(function() {

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
  'padding': 300,
  'tolerance': 70,
  'side': 'right'
});

  $('#featured nav ul li button').click(function(){
    if(!$(this).parent('li').hasClass('active')) {
      $('#featured nav ul li').removeClass('active')
      $(this).parent('li').addClass('active')
      const postId = $(this).text()
      $(`#featured .featured-post`).hide()
      $('#featured .post-id-'+postId).show()
    }
  });
});