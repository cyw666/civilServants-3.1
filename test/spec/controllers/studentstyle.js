'use strict';

describe('Controller: StudentstyleCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var StudentstyleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentstyleCtrl = $controller('StudentstyleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentstyleCtrl.awesomeThings.length).toBe(3);
  });
});
