import BasePO from './base.po';

class AuthenticationPO extends BasePO {

  private readonly $createAccountForm = '#create-account_form';
  private readonly $createAccountEmailAddressInput = '#email_create';
  private readonly $createAccountCreateButton = '#SubmitCreate';
  private readonly $createAccountErrorMessageContainer = '#create_account_error';
  
  private readonly $usernameInput = '#email'; 
  private readonly $passwordInput = '#password';
  private readonly $loginButton = '#SubmitCreate';
  // private readonly $errorMessageContainer = '#center_column > .alert.alert-danger';

  async go() {
    await this.navigate('/index.php?controller=authentication');
  }
  
  async isAuthenticationPage(): Promise<boolean> {
    await page.waitForSelector('#create-account_form');
    const title = await this.getElementTextBySelector('.page-heading');
    return title.toUpperCase() === 'AUTHENTICATION' && page.url().includes('controller=authentication');
  }
  
  async createAccount(createAccountEmailAddress: string) {
    await page.type(this.$createAccountEmailAddressInput, createAccountEmailAddress);
    await page.click(this.$createAccountCreateButton);
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    // await page.waitForSelector("#account-creation_form");
  }
  
  async getCreateAccountErrorMessage(): Promise<string> {
    return this.getElementTextBySelector(this.$createAccountErrorMessageContainer);
  }

  async login(username: string, password: string) {
    await page.type(this.$usernameInput, username);
    await page.type(this.$passwordInput, password);
    await page.click(this.$loginButton);
  }
}

export default new AuthenticationPO();