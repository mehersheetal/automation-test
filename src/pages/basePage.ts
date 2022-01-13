import log from "@wdio/logger";
import { testsConfig } from "../../config/tests.config";
const logger = log("@BasePage");

export default class BasePage {
  constructor() {
    logger.info("Base page constructor, page object model setup");
  }

  getElementByPartialText(tagName, text): WebdriverIO.Element {
    // tagName=em, text=Buy
    // $("em*=Buy")
    return $(`${tagName}*=${text}`);
  }

  getElementByText(tagName, text): WebdriverIO.Element {
    // tagName=em, text=Buy
    // $("em*=Buy")
    return $(`${tagName}=${text}`);
  }

  get cookieAccept(): WebdriverIO.Element {
    return this.getElementByText("button", "Accept");
  }

  //get rid of cookies
  async handlingCookieAlert() {
    await browser.execute(`document.cookie = "OptanonAlertBoxClosed=${new Date().toISOString()};";`)
    await browser.refresh()
  }

  async acceptCookie() {
    try { //Optional Cookie popup
      browser.setTimeout({ 'implicit': 0 })
      const elements = await $$("//button[normalize-space()='Accept']")
      if (elements.length > 0 && elements[0].isClickable) {
        await elements[0].click
      }
    } catch (ex) {
      // logger.error(error)
    }
    browser.setTimeout({ 'implicit': testsConfig.waitforTimeout })
  }
}

