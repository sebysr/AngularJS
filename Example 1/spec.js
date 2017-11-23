describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    console.log(expect(scope.phones.length).toBe(3));
    console.log(expect(scope.name).toBe('world'));
  }));

});