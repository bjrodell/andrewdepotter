// JavaScript Document
function toggleGroupThree()
		
			{
			  "use strict";
				
			  if(document.getElementById("groupthree").classList.contains('visible')){
		 	     document.getElementById("groupthree").classList.add('hidden');
				 document.getElementById("groupthree").classList.remove('visible');
				 //this is to remove the highlight for the button
				 document.getElementById("buttonthree").classList.add('inactivefilter');
				 document.getElementById("buttonthree").classList.remove('activefilter'); 
		        }
				
			   else {
			     document.getElementById("groupthree").classList.add('visible');
				 document.getElementById("groupthree").classList.remove('hidden');
				 //this is to add the highlight for the corresponding button
				 document.getElementById("buttonthree").classList.add('activefilter'); 
				 document.getElementById("buttonthree").classList.remove('inactivefilter');
				
			}
			}