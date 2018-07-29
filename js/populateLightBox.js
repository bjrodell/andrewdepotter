// JavaScript Document
jQuery(document).ready(function($){
	"use strict";
	$('.card-body').click(function(e){
	  e.preventDefault();
	  var image_src = $(this).children(".gallery").attr("src"); 
	    $('.lightbox').html('<img src ="' +image_src+ '">'+'<p>Paragraph about how awesome this thing is.</p>'+'<button type="button" class="close" aria-label="Close">'+'<span onclick="closeLightBox()" aria-hidden="true">&times;</span>'+'</button>');
		$('.lightbox').removeClass("d-none");
		$('body').css('overflow','hidden');
	});
});