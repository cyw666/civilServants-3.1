'use strict';

describe('Controller: UnreadnoticeCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var UnreadnoticeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnreadnoticeCtrl = $controller('UnreadnoticeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UnreadnoticeCtrl.awesomeThings.length).toBe(3);
  });
});
