'use strict';

describe('Service: pubSubService', function () {

  // load the service's module
  beforeEach(module('luZhouApp'));

  // instantiate service
  var pubSubService;
  beforeEach(inject(function (_pubSubService_) {
    pubSubService = _pubSubService_;
  }));

  it('should do something', function () {
    expect(!!pubSubService).toBe(true);
  });

});
