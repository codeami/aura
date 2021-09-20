import authenitcationPo from './pages/authentication.po';
import accountPo from './pages/account.po';
import myAccountPo from './pages/myAccount.po';
var faker = require('faker');

describe('Create Account', () => {
  beforeEach(async () => {
    await authenitcationPo.go();
    expect(await authenitcationPo.isAuthenticationPage()).toBe(true);
    await authenitcationPo.createAccount(faker.internet.email());
  });
  
  it('navigates to Account creation page', async () => {
    expect(await accountPo.isAccountCreationPage()).toBe(true);
  });

  // Merge Custom test data object with default test data object
  it('should throw error if missing data when creating account', async () => {
    var customTestData = {
      title:'', customer_firstname: '', customer_lastname: '', email: '', password: "", dob: { days: "", months:"", years:""},
      firstname: '', lastname: '', company: '', address1 : '', address2 : '', city : '',
      id_state: '', postcode: '', id_country: '', phone : '', phone_mobile : '', alias : '', 
      createAccount: {allErrors:"You must register at least one phone number.\nlastname is required.\nfirstname is required.\npasswd is required.\naddress1 is required.\ncity is required.\nThe Zip/Postal code you've entered is invalid. It must follow this format: 00000\nThis country requires you to choose a State."}
    };
    await accountPo.fillPersonalInformationAndCreateAccount(customTestData);
    expect(await accountPo.getErrorMessage()).toContain(customTestData.createAccount.allErrors);
  });
  
  it('create account', async () => {
    var common_firstname = faker.name.firstName();
    var common_lastname = faker.name.lastName();
    var testData = {
      title:["Mr","Mrs"][Math.floor(Math.random() * 2)].toString(),
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
    await accountPo.fillPersonalInformationAndCreateAccount(testData);
    expect(await myAccountPo.isMyAccountPage()).toBe(true);
  });

});
