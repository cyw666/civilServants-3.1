'use strict';

describe('Controller: SpeciallearningCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var SpeciallearningCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeciallearningCtrl = $controller('SpeciallearningCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpeciallearningCtrl.awesomeThings.length).toBe(3);
  });
});
