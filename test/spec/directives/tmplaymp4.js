'use strict';

describe('Directive: tmPlayMp4', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tm-play-mp4></tm-play-mp4>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tmPlayMp4 directive');
  }));
});
