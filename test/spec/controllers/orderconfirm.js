'use strict';

describe('Controller: OrderconfirmCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var OrderconfirmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderconfirmCtrl = $controller('OrderconfirmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderconfirmCtrl.awesomeThings.length).toBe(3);
  });
});
