import { ElementHandle } from 'puppeteer';
export default abstract class BasePO {
  protected readonly BASE_URL = 'http://automationpractice.com';
  private readonly $errorMessageContainer = '#center_column > .alert.alert-danger ol';

  abstract go(): Promise<void>;

  async navigate(url: string) {
    await page.goto(`${this.BASE_URL}${url}`);
  }

  async getElementInnerTextBySelector($selector: string): Promise<string> {
    const element = await page.$($selector);

    if (!element) {
      return '';
    }

    return page.evaluate((ele: HTMLElement) => ele.innerText || '', element);
  }

  async getElementTextBySelector($selector: string): Promise<string> {
    const element = await page.$($selector);

    if (!element) {
      return '';
    }

    return page.evaluate((ele: HTMLElement) => ele.textContent || '', element);
  }

  async getElementText($element: ElementHandle<Element>): Promise<string> {
    return $element.evaluate((ele: Element) => ele.textContent || '');
  }

  async autoStartAccountCreation(): Promise<void> {
    page.type('#createAccountEmailAddressInput', 'asdf@asdf.asdf');
    await page.click('#SubmitCreate');
  }

  async getErrorMessage(): Promise<string> {
    await page.waitForSelector(this.$errorMessageContainer, {
      visible: true,
    });
    return this.getElementInnerTextBySelector(this.$errorMessageContainer);
  }
}