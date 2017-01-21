import { browser, element, by } from 'protractor';

export class Angular2FundamentalsPage {
  myInput = element(by.id('myInput'));
  clickMe = element(by.id('click-me'));
  results = element(by.id('input-value'));

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
