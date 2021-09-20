import BasePO from './base.po';
import AccountPO from './account.po';

var faker = require('faker');

class MyAccountPO extends BasePO {

  private readonly $registerButton = '#submitAccount';
  async go() {
    await this.navigate('/index.php?controller=my-account')

    if (!(await this.isMyAccountPage())) {
      await AccountPO.fillPersonalInformationAndCreateAccountwithDefaultData();
    }
  }
  async isMyAccountPage(): Promise<boolean> {
    await page.waitForSelector('.myaccount-link-list');
    const title = await this.getElementTextBySelector('.page-heading');
    return title.toUpperCase() === 'MY ACCOUNT' && page.url().includes('my-account');
  }
}

export default new MyAccountPO();