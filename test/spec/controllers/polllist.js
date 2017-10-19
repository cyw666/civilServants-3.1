'use strict';

describe('Controller: PolllistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PolllistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolllistCtrl = $controller('PolllistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PolllistCtrl.awesomeThings.length).toBe(3);
  });
});
