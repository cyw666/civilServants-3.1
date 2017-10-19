'use strict';

describe('Controller: ClassplanCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClassplanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassplanCtrl = $controller('classPlanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClassplanCtrl.awesomeThings.length).toBe(3);
  });
});
