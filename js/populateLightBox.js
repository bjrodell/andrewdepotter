// JavaScript Document
var gal = document.getElementsByClassName('gallery'); //array of image elements that create the gallery
var thumbnails = document.getElementsByClassName('thumbnail'); //Depricated - could be replaced by gal with reworking
var counter = 0; // This actually should be called index.  Tracks the index of the array 
				 // The index of each image is designated by the alt attribute in the img element
var x = gal.length; //number of elements in gal array


jQuery(document).ready(function($){
	"use strict";
	

	
	
	
	$('.card-body').click(function(e){
	  e.preventDefault();
	  var image_src = $(this).children(".gallery").attr("src"); 
	  var title = $(this).children(".gallery").attr("title");	//can be used in lightbox to add a blurb of the art  
	  counter = $(this).children(".gallery").attr("alt");

	  var footerhtml = $('.lightbox-footer').html();
	    $('.lightbox').html('<img id="centerStage" src ="' +image_src+ '"  style="height: 85%;width: auto;">'+'<p>'+ title +'</p>'+ footerhtml +'<button type="button" class="close" aria-label="Close" >'+'<span onclick="closeLightBox()" aria-hidden="true">&times;</span>'+'</button>');
		$('.lightbox').fadeIn(1000);

		$('body').css('overflow','hidden');
		
		$('.thumbnail').on("click",function(){ //executes when thumbnail is clicked
			
	  
			counter = $(this).addClass('thumb-border').attr("alt"); //gets index of image and stores in counter
			document.getElementById('centerStage').src = gal[(Math.abs(counter))%x].src; //centerstage gets the source of the image in gal with index same as counter
		
			$('.thumbnail').each(function() { 
				//loops through each element in array and removes border from each element that's
				//not at the selected index within the array.
			
				if($(this).attr("alt")!= Math.abs(counter)){
					$(this).removeClass('thumb-border');
				}
			});
		
		});	
		
		
		
	});
	

});
	
function borderJumper(){
	
		//function used when changing thumbnail border/highlight effect
		
	
		$('.thumbnail').each(function() { //loops through thumbnail array 
		
		
			if($(this).attr("alt")!= (Math.abs(counter)%x)){
				$(this).removeClass('thumb-border');
			}else{ $(this).addClass('thumb-border') }
		});
	    
		//another way of writing the same thing... not sure why this is here...
		if($('.thumbnail').attr("alt") == (Math.abs(counter)%x)){
			$('.thumbnail').addClass('.thumb-border');
		}else{
			$('.thumbnail').removeClass('.thumb-border');
		} ;
	}
	
function nextSlide(){
	//next slide - increments counter/index
	counter++;
	document.getElementById('centerStage').src = gal[(Math.abs(counter))%x].src; //sets centerstage as element with index in gal;
	borderJumper();
}

function prevSlide(){
	//previous slide - decrements counter/index
	counter--;
	document.getElementById('centerStage').src = gal[(Math.abs(counter))%x].src;
	borderJumper();
	
	
	if(counter == 0){ //fixes issue when index < 0
		counter = (x*10);
	}
}


