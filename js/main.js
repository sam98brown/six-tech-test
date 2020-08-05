//Slideout menu functionality
window.addEventListener('DOMContentLoaded', function () {

  var btnSidebar = document.querySelector('.hamburger');
  var blockFixed = document.querySelector('#site-header');
  var blockMain = document.querySelector('#panel');
  var blockSidebar = document.querySelector('#mobile-menu');
  var blockSidebarWidth = 300;

  var slideoutSidebar = new Slideout({
      'panel': blockMain,
      'menu': blockSidebar,
      'padding': blockSidebarWidth,
      'tolerance': 70,
      'side': 'right', // move sidebar to right
      'touch': false
  });

  btnSidebar.addEventListener('click', function () {
    btnSidebar.classList.toggle("is-active");
    slideoutSidebar.toggle();
  });

  slideoutSidebar.on('beforeopen', function () {
      blockFixed.classList.add('fixed-open');
  });

  slideoutSidebar.on('beforeclose', function () {
      blockFixed.classList.remove('fixed-open');
  });

}, false);

$( document ).ready(function() {
  //Setting up wow.js
  new WOW().init();

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
