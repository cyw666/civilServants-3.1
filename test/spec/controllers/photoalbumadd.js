'use strict';

describe('Controller: PhotoalbumaddCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PhotoalbumaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PhotoalbumaddCtrl = $controller('PhotoalbumaddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PhotoalbumaddCtrl.awesomeThings.length).toBe(3);
  });
});
