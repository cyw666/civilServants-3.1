'use strict';

describe('Controller: OrderlistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var OrderlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderlistCtrl = $controller('OrderlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderlistCtrl.awesomeThings.length).toBe(3);
  });
});
