const chromeDriver = require("../drivers/chrome");

describe("Aura Code Challenge - Create User Account Tests", () => {
  let driver;
  beforeAll(() => {
    driver = chromeDriver();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("it loads authentication page", async () => {
    await driver.get(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
    const title = await driver.getTitle();
    expect(title).toBe("Login - My Store");
  });
});
