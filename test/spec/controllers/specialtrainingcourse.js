'use strict';

describe('Controller: SpecialtrainingcourseCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var SpecialtrainingcourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpecialtrainingcourseCtrl = $controller('SpecialtrainingcourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpecialtrainingcourseCtrl.awesomeThings.length).toBe(3);
  });
});
