'use strict';

// Define the `cards` module
var cards = angular.module('cards', []);

// Define the `cardsController` controller on the `cards` module
cards.controller('cardsController', function cardsController($scope) {
  $scope.cards = [
  {
        
        imageUrl: "../media/gallery/facade.jpg", 
        name: "Facade", 
        snippet: "",
		type: ""
    }, 
    {
        
        imageUrl: "../media/gallery/davidbowie.jpg", 
        name: "Keep Your ‘Lectric eye on me, babe", 
        snippet: "",
		type: ""
    }, 
	{
        
        imageUrl: "../media/gallery/rhinopainting.jpg", 
        name: "Rhino", 
        snippet: "",
		type: ""
    }, 
	{
        
        imageUrl: "../media/gallery/barbershop.jpg", 
        name: "Meanwhile, at the barbershop...", 
        snippet: "",
		type: ""
    }, 
	{
        
        imageUrl: "../media/gallery/thewashroom.jpg", 
        name: "The (wash) Room", 
        snippet: "",
		type: ""
    }, 
	{
        
        imageUrl: "../media/gallery/manatee.jpg", 
        name: "Manatee", 
        snippet: "",
		type: ""
    }
  ];
});