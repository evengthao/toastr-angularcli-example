import { NgnewPage } from './app.po';

describe('ngnew App', function() {
  let page: NgnewPage;

  beforeEach(() => {
    page = new NgnewPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngnew Works!');
  });
});
