'use strict';

describe('Controller: NoticedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('luZhouApp'));

  var NoticedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NoticedetailCtrl = $controller('NoticedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NoticedetailCtrl.awesomeThings.length).toBe(3);
  });
});
