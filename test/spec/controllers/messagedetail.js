'use strict';

describe('Controller: MessagedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var MessagedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessagedetailCtrl = $controller('MessagedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MessagedetailCtrl.awesomeThings.length).toBe(3);
  });
});
