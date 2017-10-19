'use strict';

describe('Controller: ApplyinvoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ApplyinvoiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplyinvoiceCtrl = $controller('ApplyinvoiceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApplyinvoiceCtrl.awesomeThings.length).toBe(3);
  });
});
