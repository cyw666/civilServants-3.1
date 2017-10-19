'use strict';

describe('Controller: ExamCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ExamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamCtrl = $controller('ExamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExamCtrl.awesomeThings.length).toBe(3);
  });
});
