'use strict';

describe('Controller: TeststatCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var TeststatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeststatCtrl = $controller('TeststatCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeststatCtrl.awesomeThings.length).toBe(3);
  });
});
