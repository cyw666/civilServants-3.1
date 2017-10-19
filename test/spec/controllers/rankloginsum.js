'use strict';

describe('Controller: RankloginsumCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var RankloginsumCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankloginsumCtrl = $controller('RankloginsumCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RankloginsumCtrl.awesomeThings.length).toBe(3);
  });
});
