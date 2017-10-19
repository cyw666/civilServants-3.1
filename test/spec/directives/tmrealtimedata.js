'use strict';

describe('Directive: tmRealTimeData', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tm-real-time-data></tm-real-time-data>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tmRealTimeData directive');
  }));
});
