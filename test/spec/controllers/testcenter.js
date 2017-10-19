'use strict';

describe('Controller: TestcenterCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var TestcenterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestcenterCtrl = $controller('TestcenterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestcenterCtrl.awesomeThings.length).toBe(3);
  });
});
