'use strict';

describe('Controller: RankgroupCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var RankgroupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RankgroupCtrl = $controller('RankgroupCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RankgroupCtrl.awesomeThings.length).toBe(3);
  });
});
