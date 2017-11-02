'use strict';

describe('Controller: PrintcertificateCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PrintcertificateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrintcertificateCtrl = $controller('PrintcertificateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PrintcertificateCtrl.awesomeThings.length).toBe(3);
  });
});
