'use strict';

describe('Controller: MessagelistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var MessagelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessagelistCtrl = $controller('MessagelistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MessagelistCtrl.awesomeThings.length).toBe(3);
  });
});
