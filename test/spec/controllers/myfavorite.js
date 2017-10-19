'use strict';

describe('Controller: MyfavoriteCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var MyfavoriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyfavoriteCtrl = $controller('MyfavoriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyfavoriteCtrl.awesomeThings.length).toBe(3);
  });
});
