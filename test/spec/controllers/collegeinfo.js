'use strict';

describe('Controller: CollegeinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var CollegeinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollegeinfoCtrl = $controller('CollegeinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollegeinfoCtrl.awesomeThings.length).toBe(3);
  });
});
