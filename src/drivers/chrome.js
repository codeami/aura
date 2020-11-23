const chromeDriver = require("@sitespeed.io/chromedriver");
const Chrome = require("selenium-webdriver/chrome");
const { Builder } = require("selenium-webdriver");

module.exports = () => {
  const options = new Chrome.Options();
  options.addArguments("--no-sandbox");
  options.addArguments("--incognito");
  options.addArguments("--disable-popup-blocking");
  options.addArguments("--disable-default-apps");
  options.addArguments("--disable-infobars");
  options.addArguments("--disable-extensions");
  options.headless();

  const service = new Chrome.ServiceBuilder(chromeDriver.binPath());

  const driver = new Builder()
    .forBrowser("chrome")
    .setChromeService(service)
    .setChromeOptions(options)
    .build();

  const timeouts = {
    implicit: 0
  };

  driver.manage().setTimeouts(timeouts);

  return driver;
};
