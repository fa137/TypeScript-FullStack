'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should include header with app name', function() {
    expect(page.h1.getText()).toBe('AET: Skeleton App');
   
  });

});
