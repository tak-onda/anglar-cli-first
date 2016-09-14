import { AngularCliSecondPage } from './app.po';

describe('angular-cli-second App', function() {
  let page: AngularCliSecondPage;

  beforeEach(() => {
    page = new AngularCliSecondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
