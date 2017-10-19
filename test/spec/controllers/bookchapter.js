'use strict';

describe('Controller: BookchapterCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var BookchapterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookchapterCtrl = $controller('BookchapterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookchapterCtrl.awesomeThings.length).toBe(3);
  });
});
