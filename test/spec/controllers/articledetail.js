'use strict';

describe('Controller: ArticledetailCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ArticledetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticledetailCtrl = $controller('articleDetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArticledetailCtrl.awesomeThings.length).toBe(3);
  });
});
