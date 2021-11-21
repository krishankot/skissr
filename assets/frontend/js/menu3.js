$(function() {
  $('.hamburger').click(function () {
    showHideMobile();
  });
  
  $(".dimmer").click(function() {
    showHideMobile();
  });
  
  $('li .icon-arrow').click(function () {
    $(this).parent().parent().toggleClass('showSubmenu');
  });
});

function showHideMobile() {
  $(".hamburger").toggleClass('active');
  //$(".hamburger").parent('.menu').toggleClass('active');
  $('.top-header-bar.m-visible .submenu').toggleClass('active');
  //$('.top-header-bar.m-visible .dimmer').toggleClass('active');
  //$('body').toggleClass('no-scrolling');
}

