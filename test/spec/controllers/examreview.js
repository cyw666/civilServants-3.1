'use strict';

describe('Controller: ExamreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ExamreviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamreviewCtrl = $controller('ExamreviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExamreviewCtrl.awesomeThings.length).toBe(3);
  });
});
