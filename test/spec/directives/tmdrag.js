'use strict';

describe('Directive: tmDrag', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tm-drag></tm-drag>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tmDrag directive');
  }));
});
