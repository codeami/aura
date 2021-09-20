import BasePO from './base.po';
import AuthenticationPo from './authentication.po';

var faker = require('faker');

class AccountPO extends BasePO {

  
  private readonly $registerButton = '#submitAccount';

  private readonly $titleMrRadioButton = '#id_gender1';
  private readonly $titleMrsRadioButton = '#id_gender2';
  private readonly $customer_firstnameInput = '#customer_firstname';
  private readonly $customer_lastnameInput = '#customer_lastname';
  private readonly $emailInput = '#email';
  private readonly $passwordInput = '#passwd';

  private readonly $daysDOBSelectList = '#days';
  private readonly $monthsDOBSelectList = '#months';
  private readonly $yearsDOBSelectList = '#years';
  
  private readonly $createAccountForm = '#create-account_form';
  private readonly $createAccountEmailAddressInput = '#email_create';
  private readonly $createAccountCreateButton = '#SubmitCreate';
  private readonly $createAccountErrorMessageContainer = '#create_account_error';
  
  private readonly $firstnameInput = '#firstname';
  private readonly $lastnameInput = '#lastname';
  private readonly $companyInput = '#company';
  private readonly $address1Input = '#address1';
  private readonly $address2Input = '#address2';
  private readonly $cityInput = '#city';
  private readonly $id_stateSelect = '#id_state';
  private readonly $postcodeInput = '#postcode';
  private readonly $id_countrySelect = '#id_country';
  private readonly $phoneInput = '#phone';
  private readonly $phone_mobileInput = '#phone_mobile';
  private readonly $aliasInput = '#alias';


  async go() {
    await this.navigate('/index.php?controller=authentication')

    if (!(await this.isAccountCreationPage())) {
      await AuthenticationPo.createAccount(faker.internet.email());
    }
  }
  async isAccountCreationPage(): Promise<boolean> {
    await page.waitForSelector('#account-creation_form');
    const title = await this.getElementTextBySelector('.page-heading');
    return title.toUpperCase() === 'CREATE AN ACCOUNT' && page.url().includes('#account-creation');
  }

  async fillPersonalInformationAndCreateAccount (testdata: 
      { title?: string; customer_firstname?: any; customer_lastname?: any; email: any; password?: any; 
        createAccount?: { allErrors: string; };
        dob: { days: any; months: any; years: any};
        firstname: any; lastname: any; company: any; address1 : any; address2 : any; city : any; 
        id_state: any; postcode: any; id_country: any; phone : any; phone_mobile : any; alias : any; 
     }) 
    {
      await page.click(this.$titleMrRadioButton);
      await page.type(this.$customer_firstnameInput, testdata.customer_firstname)
      await page.type(this.$customer_lastnameInput, testdata.customer_lastname)
      //await page.type(this.$emailInput, "asdf@asdf.qwer")
      await page.type(this.$passwordInput, testdata.password)
      
      await page.select(this.$daysDOBSelectList, testdata.dob.days)
      await page.select(this.$monthsDOBSelectList, testdata.dob.months)
      await page.select(this.$yearsDOBSelectList, testdata.dob.years)
      
      await page.type(this.$firstnameInput, testdata.firstname)
      await page.type(this.$lastnameInput, testdata.lastname)
      await page.type(this.$companyInput, testdata.company)
      await page.type(this.$address1Input, testdata.address1)
      await page.type(this.$address2Input, testdata.address2)
      await page.type(this.$cityInput, testdata.city)
      await page.type(this.$id_stateSelect, testdata.id_state)
      await page.type(this.$postcodeInput, testdata.postcode)
      await page.type(this.$id_countrySelect, testdata.id_country)
      await page.type(this.$phoneInput, testdata.phone)
      await page.type(this.$phone_mobileInput, testdata.phone_mobile)
      await page.type(this.$aliasInput, testdata.alias)
      await page.click(this.$registerButton)
      // await page.waitForNavigation({ waitUntil: 'networkidle0' });
      // await page.waitForSelector('.myaccount-link-list');
  }

  async fillPersonalInformationAndCreateAccountwithDefaultData (){
    var common_firstname = faker.name.firstName();
    var common_lastname = faker.name.lastName()
    var testdata = {
      title:["Mr","Mrs"][Math.floor(Math.random() * 2)],
      customer_firstname: common_firstname,
      customer_lastname: common_lastname,
      email: faker.internet.email(),
      password: faker.internet.password(),
      dob: {
        days: faker.datatype.number({'min': 1, 'max': 28 }).toString(),
        months: faker.datatype.number({'min': 1, 'max': 12 }).toString(),
        years: faker.datatype.number({'min': 1900, 'max': 2020 }).toString()
      },
      firstname: common_firstname, lastname: common_lastname, company: faker.company.companyName(), 
      address1 : faker.address.streetAddress(), address2 : '', city : faker.address.city(),
      id_state: faker.address.stateAbbr(), postcode:'00000', id_country: faker.address.countryCode(), 
      phone : '', phone_mobile : faker.phone.phoneNumber('0165#######'), alias : '', 
      createAccount: {allErrors:""}
    }
    await this.fillPersonalInformationAndCreateAccount(testdata)
  }

  async getCreateAccountErrorMessage(): Promise<string> {
    return this.getElementTextBySelector(this.$createAccountErrorMessageContainer);
  }
}

export default new AccountPO();