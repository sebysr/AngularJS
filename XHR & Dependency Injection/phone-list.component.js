// Register `phoneList` component, along with its associated controller and template
// Our component is isolated and safe from "external influences".
'use strict';
angular.module('phoneList').component('phoneList', {
	templateUrl : 'phone-list/phone-list.template.html',//[ '$http',
	/*
	 * $http service in our controller for making an HTTP request to our web
	 * server to fetch the data in the app/phones/phones.json file. $http is
	 * just one of several built-in AngularJS services that handle common
	 * operations in web applications. AngularJS injects these services for you,
	 * right where you need them.
	 */
	controller: ['$http', function PhoneListController($http) {
	//controller : 	function PhoneListController($http) {
		var self = this;
		self.orderProp = 'age';

		$http.get('phones/phones.json').then(function(response) {
			self.phones = response.data;
			/*In the PhoneListController controller, pre-process the HTTP response by limiting
			 the number of phones to the first 5 in the list. Use the following code in the $http callback:
			 */
			//self.phones = response.data.slice(0, 5);
		});
		
		
		//Visibility JSON
		self.preVisibility=false;
		self.show = function(){
			console.log("dentro la function");
			self.preVisibility=!self.preVisibility;
			console.log("dentro la function2");
		}
	//}
		}]
});