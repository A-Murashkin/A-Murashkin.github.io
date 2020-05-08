// main4.js:

var btn = document.getElementById("btn");
 
btn.onclick = function (e) {
	// e.preventDefault();
	var text = document.querySelector(".topic");
	text.classList.add("red");
	var img = document.querySelector(".trevel");
	img.style.display = "none";
	var img = document.querySelector(".freedom");
	img.style.display = "block";
	// далее - уже указана переменная, поэтому форма записи меняется: 
    document.querySelector(".wait-traffic").style.marginTop = "50px";
    document.querySelector(".wait-creation").style.marginTop = "100px";

}


$(function () {

	$(window).scroll(function() {
	    $('.ticket').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+800) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.name, .tel').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+800) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

    $(window).scroll(function() {
	    $('.email, .flight').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+800) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.btn-form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+800) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});

})