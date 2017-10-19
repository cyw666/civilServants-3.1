'use strict';

describe('Controller: ClasstopiclistCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var ClasstopiclistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClasstopiclistCtrl = $controller('classTopicListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ClasstopiclistCtrl.awesomeThings.length).toBe(3);
  });
});
