import { ClientHiveePage } from './app.po';

describe('client-hivee App', function() {
  let page: ClientHiveePage;

  beforeEach(() => {
    page = new ClientHiveePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
