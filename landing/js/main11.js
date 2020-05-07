$(function(){
  	$(".btn").click(function() {
      $('#exampleModal').arcticmodal();
   });
});



$(document).ready(function(){
$("a[href='#footer'], a[href='#first']").on("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 6000);
e.preventDefault();
return false;
   });


});



$(document).ready(function(){
      $('.slider').bxSlider();
    });