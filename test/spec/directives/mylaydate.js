'use strict';

describe('Directive: myLaydate', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-laydate></my-laydate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myLaydate directive');
  }));
});
