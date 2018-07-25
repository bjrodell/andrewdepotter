// JavaScript Document
function changeNavClass()
		
			{
			
			  if(document.getElementById("navigationmenu").classList.contains('hiddennav')){
		 	     document.getElementById("navigationmenu").classList.add('visiblenav');
				 document.getElementById("navigationmenu").classList.remove('hiddennav');
				 document.getElementById("lineone").classList.add('is-active');
				 document.getElementById("lineone").classList.remove('lineone');
				 document.getElementById("linetwo").classList.add('is-active');
				 document.getElementById("linetwo").classList.remove('linetwo'); 
				 document.getElementById("linethree").classList.add('is-active');
				 document.getElementById("linethree").classList.remove('linethree'); 
				 document.getElementById("navbutton").classList.add('is-active');
		        }
				
			   else {
			     document.getElementById("navigationmenu").classList.add('hiddennav');
				 document.getElementById("navigationmenu").classList.remove('visiblenav');
				 document.getElementById("lineone").classList.remove('is-active');
				 document.getElementById("lineone").classList.add('lineone');
				 document.getElementById("linetwo").classList.remove('is-active');
				 document.getElementById("linetwo").classList.add('linetwo');
				 document.getElementById("linethree").classList.remove('is-active');
				 document.getElementById("linethree").classList.add('linethree');
				 document.getElementById("navbutton").classList.remove('is-active');
			   }
				 
				
			}