// JavaScript Document



function buttonSelector()
{
	"use strict";

	var buttonvalue = parent.document.URL.substring(parent.document.URL.indexOf('?')+1, parent.document.URL.length);//gets the value after the ? in the url as a string
	
	var buttonvalueinteger = parseInt(buttonvalue);
	
	switch(buttonvalueinteger){
		case 1 :
	        document.getElementById("remodel").classList.add('visible');
			document.getElementById("remodel").classList.remove('hidden');
			//this is to add the highlight for the corresponding button
			document.getElementById("remodelbutton").classList.add('activefilter'); 
			document.getElementById("remodelbutton").classList.remove('inactivefilter');
			break;
	
		case 2 :
			document.getElementById("handyman").classList.add('visible');
			document.getElementById("handyman").classList.remove('hidden');
			//this is to add the highlight for the corresponding button
			document.getElementById("handymanbutton").classList.add('activefilter'); 
			document.getElementById("handymanbutton").classList.remove('inactivefilter');	
			break;
	
		case 3 :
			 document.getElementById("exteriors").classList.add('visible');
			 document.getElementById("exteriors").classList.remove('hidden');
			 //this is to add the highlight for the corresponding button
			 document.getElementById("exteriorbutton").classList.add('activefilter'); 
			 document.getElementById("exteriorbutton").classList.remove('inactivefilter');
			 break;
	
		case 4 :
			 document.getElementById("commercial").classList.add('visible');
			 document.getElementById("commercial").classList.remove('hidden');
			 //this is to add the highlight for the corresponding button
			 document.getElementById("commercialbutton").classList.add('activefilter'); 
			 document.getElementById("commercialbutton").classList.remove('inactivefilter');
			 break;
	
	}
}