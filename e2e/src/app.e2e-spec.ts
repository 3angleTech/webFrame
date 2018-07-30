/**
 * End-To-End tests for AppPage.
 */
import { AppPage } from './app.po';


describe('webFrame', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the public account pages', () => {
    page.navigateToRoot();
    expect(page.getPageTitle()).toEqual('Login');

    page.navigateToSignupPage();
    expect(page.getPageTitle()).toEqual('Signup');

    page.navigateToRoot();
    expect(page.getPageTitle()).toEqual('Login');
  });
});
