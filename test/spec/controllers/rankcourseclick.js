'use strict';

describe('Controller: RankcourseclickCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var RankcourseclickCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankcourseclickCtrl = $controller('RankcourseclickCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RankcourseclickCtrl.awesomeThings.length).toBe(3);
  });
});
