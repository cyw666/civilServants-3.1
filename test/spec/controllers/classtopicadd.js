'use strict';

describe('Controller: ClasstopicaddCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClasstopicaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClasstopicaddCtrl = $controller('classTopicAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClasstopicaddCtrl.awesomeThings.length).toBe(3);
  });
});
