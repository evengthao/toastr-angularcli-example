export class NgnewPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngnew-app p')).getText();
  }
}
