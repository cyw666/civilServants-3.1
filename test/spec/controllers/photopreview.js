'use strict';

describe('Controller: PhotopreviewCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PhotopreviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotopreviewCtrl = $controller('PhotopreviewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhotopreviewCtrl.awesomeThings.length).toBe(3);
  });
});
