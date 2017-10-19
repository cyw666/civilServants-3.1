'use strict';

describe('Controller: UserrankinglistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var UserrankinglistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserrankinglistCtrl = $controller('UserrankinglistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserrankinglistCtrl.awesomeThings.length).toBe(3);
  });
});
