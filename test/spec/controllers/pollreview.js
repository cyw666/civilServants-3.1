'use strict';

describe('Controller: PollreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PollreviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollreviewCtrl = $controller('PollreviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PollreviewCtrl.awesomeThings.length).toBe(3);
  });
});
