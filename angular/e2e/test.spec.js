// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3000/');

    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($('header')), 5000);

    element(by.id('gobutton')).click();

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});