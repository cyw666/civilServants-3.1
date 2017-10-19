'use strict';

describe('Controller: InvoicelistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var InvoicelistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvoicelistCtrl = $controller('InvoicelistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InvoicelistCtrl.awesomeThings.length).toBe(3);
  });
});
