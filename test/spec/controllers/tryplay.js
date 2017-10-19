'use strict';

describe('Controller: TryplayCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var TryplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TryplayCtrl = $controller('TryplayCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TryplayCtrl.awesomeThings.length).toBe(3);
  });
});
