'use strict';

describe('Controller: OriginalarticleCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var OriginalarticleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OriginalarticleCtrl = $controller('OriginalarticleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OriginalarticleCtrl.awesomeThings.length).toBe(3);
  });
});
