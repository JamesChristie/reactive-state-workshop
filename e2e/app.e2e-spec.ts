import { ReactiveStateWorkshopPage } from './app.po';

describe('reactive-state-workshop App', () => {
  let page: ReactiveStateWorkshopPage;

  beforeEach(() => {
    page = new ReactiveStateWorkshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
