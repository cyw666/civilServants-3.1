'use strict';

describe('Controller: ClassnoticeCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClassnoticeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassnoticeCtrl = $controller('classNoticeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClassnoticeCtrl.awesomeThings.length).toBe(3);
  });
});
