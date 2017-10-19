'use strict';

describe('Controller: PersonalcenterCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PersonalcenterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonalcenterCtrl = $controller('PersonalcenterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonalcenterCtrl.awesomeThings.length).toBe(3);
  });
});
