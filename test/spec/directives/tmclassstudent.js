'use strict';

describe('Directive: tmclassStudent', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tmclass-student></tmclass-student>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tmclassStudent directive');
  }));
});
