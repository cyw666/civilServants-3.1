'use strict';

describe('Controller: PayconfirmCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PayconfirmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PayconfirmCtrl = $controller('PayconfirmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PayconfirmCtrl.awesomeThings.length).toBe(3);
  });
});
