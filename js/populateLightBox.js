// JavaScript Document
var gal = document.getElementsByClassName('gallery');
var thumbnails = document.getElementsByClassName('thumbnail');
var counter = 0;
var x = gal.length;


jQuery(document).ready(function($){
	"use strict";
	

	
	
	
	$('.card-body').click(function(e){
	  e.preventDefault();
	  var image_src = $(this).children(".gallery").attr("src"); 
	  var title = $(this).children(".gallery").attr("title"); 
	  counter = $(this).children(".gallery").attr("alt");
	  var footerhtml = $('.lightbox-footer').html();
	    $('.lightbox').html('<img id="centerStage" src ="' +image_src+ '"  style="height: 85%;width: auto;">'+'<p>'+ title +'</p>'+ footerhtml +'<button type="button" class="close" aria-label="Close" >'+'<span onclick="closeLightBox()" aria-hidden="true">&times;</span>'+'</button>');
		$('.lightbox').fadeIn(1000);
		$('body').css('overflow','hidden');
		
		$('.thumbnail').on("click",function(){
	  
		counter = $(this).addClass('thumb-border').attr("alt");
		document.getElementById('centerStage').src = gal[(Math.abs(counter))%x].src;
		
		$('.thumbnail').each(function() {
		if($(this).attr("alt")!= Math.abs(counter)){
		$(this).removeClass('thumb-border');
		}
		});
		
		});	
		
		
		
	});
	

});
	
function borderJumper(){
	
	
		$('.thumbnail').each(function() {
		if($(this).attr("alt")!= (Math.abs(counter)%x)){
		$(this).removeClass('thumb-border');
		}else{ $(this).addClass('thumb-border') }
		});
	
		if($('.thumbnail').attr("alt") == (Math.abs(counter)%x)){
			$('.thumbnail').addClass('.thumb-border');
		}else{
			$('.thumbnail').removeClass('.thumb-border');
		} ;
	}



