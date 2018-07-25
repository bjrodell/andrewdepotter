// JavaScript Document
function toggleGroupFour()
		
			{
			  "use strict";
				
			  if(document.getElementById("groupfour").classList.contains('visible')){
		 	     document.getElementById("groupfour").classList.add('hidden');
				 document.getElementById("groupfour").classList.remove('visible');
				 //this is to remove the highlight for the button
				 document.getElementById("buttonfour").classList.add('inactivefilter');
				 document.getElementById("buttonfour").classList.remove('activefilter'); 
		        }
				
			   else {
			     document.getElementById("groupfour").classList.add('visible');
				 document.getElementById("groupfour").classList.remove('hidden');
				 //this is to add the highlight for the corresponding button
				 document.getElementById("buttonfour").classList.add('activefilter'); 
				 document.getElementById("buttonfour").classList.remove('inactivefilter');
				
			}
			}