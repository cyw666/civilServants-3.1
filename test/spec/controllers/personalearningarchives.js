'use strict';

describe('Controller: PersonalearningarchivesCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var PersonalearningarchivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PersonalearningarchivesCtrl = $controller('PersonalearningarchivesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PersonalearningarchivesCtrl.awesomeThings.length).toBe(3);
  });
});
