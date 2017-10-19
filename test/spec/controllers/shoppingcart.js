'use strict';

describe('Controller: ShoppingcartCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ShoppingcartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingcartCtrl = $controller('ShoppingcartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShoppingcartCtrl.awesomeThings.length).toBe(3);
  });
});
