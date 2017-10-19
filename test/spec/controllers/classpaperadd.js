'use strict';

describe('Controller: ClasspaperaddCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClasspaperaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClasspaperaddCtrl = $controller('classPaperAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClasspaperaddCtrl.awesomeThings.length).toBe(3);
  });
});
