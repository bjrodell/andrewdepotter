// JavaScript Document
// JavaScript Document

function lightBoxSwitch()
			{
			  "use strict";	
			
			  if(document.getElementById("lightbox").classList.contains('hiddenbox')){
				 document.getElementById("navigationmenu").classList.add('hidden');
		 	     document.getElementById("lightbox").classList.add('visiblebox');
				 document.getElementById("lightbox").classList.remove('hiddenbox');
				 document.getElementById("picturebox").classList.add('visiblebox');
				 document.getElementById("picturebox").classList.remove('hiddenbox');
				 document.getElementById("cancellightbox").classList.add('visiblebox');
				 document.getElementById("cancellightbox").classList.remove('hiddenbox');
				 
		        }
				
			   else {
				 document.getElementById("navigationmenu").classList.remove('hidden');
			     document.getElementById("lightbox").classList.add('hiddenbox');
				 document.getElementById("lightbox").classList.remove('visiblebox');
				 document.getElementById("picturebox").classList.add('hiddenbox');
				 document.getElementById("picturebox").classList.remove('visiblebox');
				 document.getElementById("cancellightbox").classList.add('hiddenbox');
				 document.getElementById("cancellightbox").classList.remove('visiblebox');
			   }
				 
				
			}
