'use strict';

describe('Controller: ClasslistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClasslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClasslistCtrl = $controller('ClasslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClasslistCtrl.awesomeThings.length).toBe(3);
  });
});
