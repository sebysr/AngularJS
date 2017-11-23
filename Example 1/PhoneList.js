angular.module('phonecatApp', []).controller('PhoneListController', function() {

// Define the `phonecatApp` module
//var phonecatApp = angular.module('phonecatApp', []);
//
//// Define the `PhoneListController` controller on the `phonecatApp` module
//phonecatApp.controller('PhoneListController', function () {

	var phones = this;
	phones.name = 'world';
	phones.todos = [
	    {
	        name: 'Nexus S',
	        snippet: 'Fast just got faster with Nexus S.'
	      }, {
	        name: 'Motorola XOOM™ with Wi-Fi',
	        snippet: 'The Next, Next Generation tablet.'
	      }, {
	        name: 'MOTOROLA XOOM™',
	        snippet: 'The Next, Next Generation tablet.'
	      }
	    ];
	
	/*
	var persone = this;
	persone.todos = [
	    {
	        name: 'A',
	      }, {
	        name: 'M',
	      }, {
	        name: 'C',
	      }
	    ];*/
	  });