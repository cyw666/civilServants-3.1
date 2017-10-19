'use strict';

describe('Filter: timeLimit', function () {

  // load the filter's module
  beforeEach(module('luZhouApp'));

  // initialize a new instance of the filter before each test
  var timeLimit;
  beforeEach(inject(function ($filter) {
    timeLimit = $filter('timeLimit');
  }));

  it('should return the input prefixed with "timeLimit filter:"', function () {
    var text = 'angularjs';
    expect(timeLimit(text)).toBe('timeLimit filter: ' + text);
  });

});
