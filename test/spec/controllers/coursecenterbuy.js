'use strict';

describe('Controller: CoursecenterbuyCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var CoursecenterbuyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoursecenterbuyCtrl = $controller('CoursecenterbuyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CoursecenterbuyCtrl.awesomeThings.length).toBe(3);
  });
});
