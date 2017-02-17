// spec.js
describe('Protractor Demo App', function() {
  it('Should Increment', function() {
    browser.driver.get('http://localhost:3000/');

    // var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    // browser.wait(EC.presenceOf($('[data-vanv-hook="counter-increment"]')), 5000);

    browser.wait(new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 2000)
    }));

    // click the first counter
    $$('.vandv-counter-increment').first().click()

    const counters = $$('.vandv-counter-state');

    counters.get(0).getText(function (text) {
      expect(text).toEqual('In Html: 1')
    })

    counters.get(1).getText(function (text) {
      expect(text).toEqual('In Angular 1: 1')
    })

    counters.get(2).getText(function (text) {
      expect(text).toEqual('Manipulate Commons state from angular: 1')
    })
  });
});