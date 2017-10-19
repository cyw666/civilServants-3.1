'use strict';

describe('Controller: ClassdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClassdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassdetailCtrl = $controller('classDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClassdetailCtrl.awesomeThings.length).toBe(3);
  });
});
