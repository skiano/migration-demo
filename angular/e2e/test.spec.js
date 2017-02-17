// spec.js
describe('Protractor Demo App', function() {
  it('Should Increment', function() {
    browser.get('http://localhost:3000/');

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

    $$('.vandv-counter-state').each(function (element, index) {
      element.getText().then(function (text) {
        switch (index) {
          case (0):
            expect(text).toEqual('In Html: 1')
            break;
          case (1):
            expect(text).toEqual('In Angular 1: 1')
            break;
          case (2):
            expect(text).toEqual('Manipulate Commons state from angular: 1')
            break;
        }
      });
    });
  });
});