'use strict';

describe('Controller: ForgetpasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ForgetpasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgetpasswordCtrl = $controller('ForgetpasswordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForgetpasswordCtrl.awesomeThings.length).toBe(3);
  });
});
