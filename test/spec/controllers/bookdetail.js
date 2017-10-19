'use strict';

describe('Controller: BookdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var BookdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookdetailCtrl = $controller('BookdetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookdetailCtrl.awesomeThings.length).toBe(3);
  });
});
