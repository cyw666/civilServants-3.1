'use strict';

describe('Controller: RankcoursefinishCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var RankcoursefinishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankcoursefinishCtrl = $controller('RankcoursefinishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RankcoursefinishCtrl.awesomeThings.length).toBe(3);
  });
});
