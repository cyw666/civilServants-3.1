'use strict';

describe('Controller: ChangeuserinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ChangeuserinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChangeuserinfoCtrl = $controller('changeUserInfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChangeuserinfoCtrl.awesomeThings.length).toBe(3);
  });
});
