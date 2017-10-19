'use strict';

describe('Controller: ClassexamCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClassexamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassexamCtrl = $controller('classExamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClassexamCtrl.awesomeThings.length).toBe(3);
  });
});
