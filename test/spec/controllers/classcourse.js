'use strict';

describe('Controller: ClasscourseCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClasscourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClasscourseCtrl = $controller('classCourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClasscourseCtrl.awesomeThings.length).toBe(3);
  });
});
