import { Angular2FundamentalsPage } from './app.po';
import {browser} from "protractor";

describe('angular2-fundamentals simple-form', function() {
  let page: Angular2FundamentalsPage;

  beforeEach(() => {
    page = new Angular2FundamentalsPage();
  });

  it('can add name to simple form', () => {
    let expectedValue: string = 'foo';
    page.navigateTo();
    page.myInput.sendKeys(expectedValue);
    page.clickMe.click();
    page.results.getText().then((text) => {
      expect(text).toEqual(expectedValue);
    });
  });
});
