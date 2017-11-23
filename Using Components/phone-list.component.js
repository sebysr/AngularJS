// Register `phoneList` component, along with its associated controller and template
// Our component is isolated and safe from "external influences".
angular.
  module('phonecatApp').
  component('phoneListCapito', {
    template:
        '<p>Hello, {{$ctrl.name}}!</p><ul>' +
        '<p>Total number of phones: {{$ctrl.phones.length}}</p>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
    	this.name = 'world';
      this.phones = [
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
      
    }
  });