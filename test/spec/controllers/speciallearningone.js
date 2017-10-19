'use strict';

describe('Controller: SpeciallearningoneCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var SpeciallearningoneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeciallearningoneCtrl = $controller('SpeciallearningoneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpeciallearningoneCtrl.awesomeThings.length).toBe(3);
  });
});
