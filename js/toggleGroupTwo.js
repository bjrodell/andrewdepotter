// JavaScript Document
function toggleGroupTwo()
		
			{
			  "use strict";
				
			  if(document.getElementById("grouptwo").classList.contains('visible')){
		 	     document.getElementById("grouptwo").classList.add('hidden');
				 document.getElementById("grouptwo").classList.remove('visible');
				 //this is to remove the highlight for the button
				 document.getElementById("buttontwo").classList.add('inactivefilter');
				 document.getElementById("buttontwo").classList.remove('activefilter'); 
		        }
				
			   else {
			     document.getElementById("grouptwo").classList.add('visible');
				 document.getElementById("grouptwo").classList.remove('hidden');
				 //this is to add the highlight for the corresponding button
				 document.getElementById("buttontwo").classList.add('activefilter'); 
				 document.getElementById("buttontwo").classList.remove('inactivefilter');
				
			}
			}