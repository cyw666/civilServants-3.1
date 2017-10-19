'use strict';

describe('Controller: ClassstudentCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClassstudentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassstudentCtrl = $controller('classStudentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClassstudentCtrl.awesomeThings.length).toBe(3);
  });
});
