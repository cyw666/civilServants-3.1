'use strict';

describe('Controller: SecuritysettingCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var SecuritysettingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecuritysettingCtrl = $controller('SecuritysettingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SecuritysettingCtrl.awesomeThings.length).toBe(3);
  });
});
