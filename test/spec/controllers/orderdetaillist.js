'use strict';

describe('Controller: OrderdetaillistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var OrderdetaillistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderdetaillistCtrl = $controller('OrderdetaillistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderdetaillistCtrl.awesomeThings.length).toBe(3);
  });
});
