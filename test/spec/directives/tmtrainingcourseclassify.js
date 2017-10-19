'use strict';

describe('Directive: tmTrainingCourseClassify', function () {

  // load the directive's module
  beforeEach(module('luZhouApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tm-training-course-classify></tm-training-course-classify>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tmTrainingCourseClassify directive');
  }));
});
