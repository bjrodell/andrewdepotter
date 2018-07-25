// JavaScript Document
function shrinkHeader()
	{
	"use strict";	
	var scrolldist=window.scrollY;
	  
	  if (scrolldist>200)
	    {
		document.getElementById('logoimage').classList.remove("fullsize");
		document.getElementById('logoimage').classList.add("halfsize");
		document.getElementById('heading').classList.remove("largebackground");
		document.getElementById('heading').classList.add("smallbackground");
		}
	  if (scrolldist<200)
	    {
		document.getElementById('logoimage').classList.remove("halfsize");
		document.getElementById('logoimage').classList.add("fullsize");
		document.getElementById('heading').classList.remove("smallbackground");
		document.getElementById('heading').classList.add("largebackground");
		}
	  }
