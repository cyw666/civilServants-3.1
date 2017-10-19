'use strict';

describe('Controller: PatptrainingnewsCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PatptrainingnewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PatptrainingnewsCtrl = $controller('PatptrainingnewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PatptrainingnewsCtrl.awesomeThings.length).toBe(3);
  });
});
