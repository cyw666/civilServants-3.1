'use strict';

describe('Controller: NewsinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var NewsinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewsinfoCtrl = $controller('NewsinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewsinfoCtrl.awesomeThings.length).toBe(3);
  });
});
