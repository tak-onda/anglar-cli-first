import { CliFirstPage } from './app.po';

describe('cli-first App', function() {
  let page: CliFirstPage;

  beforeEach(() => {
    page = new CliFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
