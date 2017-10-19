'use strict';

describe('Controller: CoursedetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var CoursedetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoursedetailsCtrl = $controller('courseDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CoursedetailsCtrl.awesomeThings.length).toBe(3);
  });
});
