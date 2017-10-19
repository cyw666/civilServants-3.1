'use strict';

describe('Controller: ResultshowCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ResultshowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultshowCtrl = $controller('ResultshowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultshowCtrl.awesomeThings.length).toBe(3);
  });
});
