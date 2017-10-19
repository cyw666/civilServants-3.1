'use strict';

describe('Controller: ClassarticledetailCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClassarticledetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClassarticledetailCtrl = $controller('classArticleDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClassarticledetailCtrl.awesomeThings.length).toBe(3);
  });
});
