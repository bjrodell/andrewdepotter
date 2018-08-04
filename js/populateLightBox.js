// JavaScript Document

jQuery(document).ready(function($){
	"use strict";
	$('.card-body').click(function(e){
	  e.preventDefault();
	  var image_src = $(this).children(".gallery").attr("src"); 
	  var title = $(this).children(".gallery").attr("title"); 
	    $('.lightbox').html('<img id="centerStage" src ="' +image_src+ '"  style="height: 85%;width: auto;position: center;">'+'<p>'+ title +'</p>'+$('.lightbox-footer').html()+'<button type="button" class="close" aria-label="Close" style="position: absolute; top: 5px; right: 30px;">'+'<span onclick="closeLightBox()" aria-hidden="true">&times;</span>'+'</button>');
		$('.lightbox').fadeIn(1000);
		$('body').css('overflow','hidden');
		
	});
});

var gal = document.getElementsByClassName('gallery');
var counter = 0;
var x = gal.length;

// below is test shit - don't put below this line unless comfortable with iit getting deleted.


