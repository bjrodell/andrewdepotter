// JavaScript Document
jQuery(document).ready(function($){
	"use strict";
	$('.card-body').click(function(e){
	  e.preventDefault();
	  var image_src = $(this).children(".gallery").attr("src"); 
	    $('.lightbox').html('<img src ="' +image_src+ '">');
		$('.lightbox').removeClass("d-none");
	});
});