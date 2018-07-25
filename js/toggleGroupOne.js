// JavaScript Document
function toggleGroupOne()
		
			{
			  "use strict";
				
			  if(document.getElementById("groupone").classList.contains('visible')){
		 	     document.getElementById("groupone").classList.add('hidden');
				 document.getElementById("groupone").classList.remove('visible');
				 //this is to remove the highlight for the button
				 document.getElementById("buttonone").classList.add('inactivefilter');
				 document.getElementById("buttonone").classList.remove('activefilter'); 
		        }
				
			   else {
			     document.getElementById("groupone").classList.add('visible');
				 document.getElementById("groupone").classList.remove('hidden');
				 //this is to add the highlight for the corresponding button
				 document.getElementById("buttonone").classList.add('activefilter'); 
				 document.getElementById("buttonone").classList.remove('inactivefilter');
				
			}
			}