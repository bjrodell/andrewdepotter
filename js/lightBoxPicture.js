// JavaScript Document
jQuery(document).ready(function($){
	"use strict";
	
		//create a list of every instance of a class
		var text_elements = document.getElementsByClassName( 'picturetext' );
		// Convert the classList to an Array
		var text_array = jQuery.makeArray( text_elements );
	
		//create a list of every instance of a class
		var picture_elements = document.getElementsByClassName( 'gallery' );
		// Convert the classList to an Array
		var picture_array = jQuery.makeArray( picture_elements );
		
		
	
	
	$('.gallery').click(function(e){
	  e.preventDefault();
	  var image_src = $(this).attr("src");
	  var image_position = $.inArray(this, picture_array);//find the position in the picture array
	  var text_position = image_position;// pair text up with picture
	  var text_to_display = $(text_array).get(text_position).innerHTML;//selects the text to be displayed from the array
		
		
	  //output statement that displays image and text into the lightbox
	   $('#picturebox').html('<img src ="' +image_src+ '" alt="image">' + 
							 '<div id="cancellightbox" onclick="lightBoxSwitch();" class="visiblebox"><p>X</p></div>' +
							 '<div class='+ "lightboxtext"  + '>' + text_to_display + '</div>');
		
	});
	
		



});