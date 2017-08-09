import { ResolvePage } from './app.po';

describe('resolve App', () => {
  let page: ResolvePage;

  beforeEach(() => {
    page = new ResolvePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
