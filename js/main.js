
$( document ).ready(function() {
  //new WOW().init();

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

//Slideout fix for sticky header
var fixed = document.querySelector('.hamburger');

slideout.on('translate', function(translated) {
  fixed.style.transform = 'translateX(' + translated + 'px)';
});

slideout.on('beforeopen', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(-300px)';
});

slideout.on('beforeclose', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(0px)';
});

slideout.on('open', function () {
  fixed.style.transition = '';
});

slideout.on('close', function () {
  fixed.style.transition = '';
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
