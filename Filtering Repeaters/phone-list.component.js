// Register `phoneList` component, along with its associated controller and template
// Our component is isolated and safe from "external influences".
angular.
  module('phonecatApp').
  component('phoneListCapito', {
	templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
    	this.name = 'world';
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          year:1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
    	  year:2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
    	  year:3
        }
      ];
      this.orderProp = 'name'; //default value of orderProp
      //this.orderProp = 'age'; //default value of orderProp
    }
  });