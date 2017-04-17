describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <cstl-home>', function () {
    var home = element(by.css('cstl-app cstl-home'));
    expect(home.isPresent()).toEqual(true);
    expect(home.getText()).toEqual("Home Works!");
  });

});
