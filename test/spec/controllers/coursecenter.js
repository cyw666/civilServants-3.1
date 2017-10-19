'use strict';

describe('Controller: CoursecenterCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var CoursecenterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoursecenterCtrl = $controller('courseCenterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CoursecenterCtrl.awesomeThings.length).toBe(3);
  });
});
