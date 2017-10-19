'use strict';

describe('Controller: ClasspaperlistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClasspaperlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClasspaperlistCtrl = $controller('classPaperListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClasspaperlistCtrl.awesomeThings.length).toBe(3);
  });
});
