'use strict';

describe('Controller: OriginalarticlelistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var OriginalarticlelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OriginalarticlelistCtrl = $controller('OriginalarticlelistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OriginalarticlelistCtrl.awesomeThings.length).toBe(3);
  });
});
