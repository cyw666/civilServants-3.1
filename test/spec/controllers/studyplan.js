'use strict';

describe('Controller: StudyplanCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var StudyplanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudyplanCtrl = $controller('StudyplanCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudyplanCtrl.awesomeThings.length).toBe(3);
  });
});
