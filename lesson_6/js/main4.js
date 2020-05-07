// Вывод на экран:
 // alert ("Привет, Мир!");

// переменные:
 var a = 35;
 var b = "Привет, ";
 var ab = "Мир!";
 var c = false;
 var d = 5; 

 // alert (a + d);

// условия:
//  if (a == 35) {
//  	alert ("Всё верно!");
//  }

 // a = 456;
 // a = prompt ("Напишите значение переменной а");

 // if (a == 37) {
 // 	alert ("a = 37");

 // } else {
 // 	alert ("Что-то другое");
 // }

 // // циклы:
 // for (var i = 0; i < 6; i++) {
 // 	alert (i);
 // }
 	
// // объекты:
// var user = {
// 	"name" : "Петя",
// 	"surname" : "Васичкин",
// 	"age" : 25
// }

// alert (user["name"]) 
// // или:
// alert (user.name)

// массивы:
// var mas = ["Петя", "Васичкин", 25];
// alert (mas[1])

// // функции:
// function doMagic (a,b) {
// 	alert (a + b);

// }

// doMagic (5,10);
// doMagic (1,2);



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
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.name, .tel').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+700) {
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