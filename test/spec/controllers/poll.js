'use strict';

describe('Controller: PollCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PollCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollCtrl = $controller('PollCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PollCtrl.awesomeThings.length).toBe(3);
  });
});
