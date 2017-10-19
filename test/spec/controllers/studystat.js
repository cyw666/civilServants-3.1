'use strict';

describe('Controller: StudystatCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var StudystatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudystatCtrl = $controller('StudystatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudystatCtrl.awesomeThings.length).toBe(3);
  });
});
