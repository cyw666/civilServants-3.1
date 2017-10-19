'use strict';

describe('Controller: StudentstyledetailCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var StudentstyledetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentstyledetailCtrl = $controller('StudentstyledetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentstyledetailCtrl.awesomeThings.length).toBe(3);
  });
});
