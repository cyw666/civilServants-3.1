'use strict';

describe('Service: antiForgeryToken', function () {

  // load the service's module
  beforeEach(module('luZhouApp'));

  // instantiate service
  var antiForgeryToken;
  beforeEach(inject(function (_antiForgeryToken_) {
    antiForgeryToken = _antiForgeryToken_;
  }));

  it('should do something', function () {
    expect(!!antiForgeryToken).toBe(true);
  });

});
