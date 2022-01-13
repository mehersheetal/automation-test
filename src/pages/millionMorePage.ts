import log from "@wdio/logger";
import { addScreenshot, addText } from "../support/reporter";
import BasePage from "./basePage";
import { expect } from "chai";
const logger = log("@MillionMorePage");

class MillionMorePages extends BasePage {
  constructor() {
    super();
    logger.info("MillionMore selector constructor, page object model setup");
  }

  /*******************
   * Map to store locators
   */
  get locatorMap() {
    return {
      "Cookies alert": {
        "Heading": "//p[@class='banner-content']",
        "Accept": "//button[contains(.,'Accept')]",
      },

      "Safety Section": {
        "Heading": "//h2[contains(.,'Ideas that change the world are often the most controversial.')]",
        "Safety header": "//h2[contains(.,'Ideas that change the world are often the most controversial.')]",
        "Safety video": "//video[contains(@poster,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HA')]",
        "Speed section header": "//span[contains(.,'With new and existing safety features, we are determined to save a million more lives.')]",
        "Speed cap": "//em[contains(.,'Speed cap')]",
        "Highway pilot": "//em[contains(.,'Highway pilot')]",
        "Driver monitoring cameras": "//em[contains(.,'Driver monitoring cameras')]",
        "Care key": "//em[contains(.,'Care Key')]",
        "Learn more URL": "//a[contains(.,'Learn more about car safety')]",
        "Conditions message": "//p[contains(.,'Features depicted may not be standard or available for all styles, engine options, model years and regions.')]",
      },

      "Testimonial Section": {
        "Heading": "//h2[contains(.,'One of a million')]",
        "Testimonial header": "//h2[contains(.,'One of a million')]",
        "Testimonial description": "//*[text()=\"Hear the stories from real car crash survivors and see how they've managed to turn an accident into a positive change in their lives.\"]",
        "Amy": "//em[contains(.,'Amy')]",
        "Amy Description": "//p[contains(.,'Meet Amy Ma, who survived a multi-vehicle collision thanks to the safety belt.')]",
        "Amy Video": "//video[contains(@poster,'amy')]",
      },

      "Innovation Section": {
        "Heading": "//h2[contains(.,'Decades of innovation')]",
        "Innovation header": "//h2[contains(.,'Decades of innovation')]",
        "Innovation description": "//p[@data-autoid='imageWithText:description']",
        "Learn more URL": "//a[@data-autoid='imageWithText:primaryCta'][contains(.,'Learn more')]",
        "Innovation image": "//img[@alt='A safety belt in grey with the text \"Since 1959\" engraved on the buckle.']",
      },

      "Models Section": {
        "Heading": "//h2[contains(.,'Explore our models')]",
        "Models Header": "//h2[contains(.,'Explore our models')]",
        "XC90 SUV Header": "(//em[contains(.,'SUV')])[1]",
        "XC90": "//span[contains(.,'XC90 Recharge')]",
        "XC90 Image": "//img[contains(., 'A birch light Volvo SUV XC90 Recharge plugin hybrid standing')]",
        "XC90 Learn": "(//a[contains(.,'Learn')])[3]",
        "XC90 Shop": "//a[@href='https://www.volvocars.com/intl/build/xc90-hybrid']",
        "Learn More": "//a[@aria-label='Learn more about Recharge']",
        "Mild Hybrid Cars": "//a[contains(.,'Mild hybrid cars')]",
      },

      "Top Panel Section": {
        "Heading": "//a[@data-track-onclick='{\"eventAction\":\"click\",\"eventLabel\":\"volvo logo\"}']",
        "Volvo logo": "(//img[contains(@src, \"https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg\")])[2]",
        "Our Cars URL": "//em[contains(.,'Our Cars')]",
        "Menu": "//em[contains(., 'Menu')]",
      },

      "Top Panel options Section": {
        "Heading": "(//img[contains(@src, \"https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg\")])[2]",
        "Volvo logo": "(//img[contains(@src, \"https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg\")])[1]",
        "Buy": "//em[contains(.,'Buy')]",
        "Own": "//em[contains(.,'Own')]",
        "Why Volvo": "//em[contains(.,'Why Volvo')]",
        "Explore": "//em[contains(.,'Explore')]",
        "More": "//em[contains(.,'More')]",
        "International": "//p[contains(.,'International')]",
        "Facebook": "//h2[contains(.,'facebook')]"
      },
      'Buy Section': {
        'Heading': "(//img[contains(@src, \"https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg\")])[1]",
        'Purchase Header': "//h3[contains(.,'Purchase')]",
        'Fleet sales': "//em[contains(.,'Fleet sales')]",
        'Used cars': "//em[contains(.,'Used cars')]"
      }
    }
  }

  /**********************
   * Method Verifies if an Element is Displayed or not Displayed
   * @params falseCase : true or false, based on Cucumber step ( not)
   * @params Section : UI section name
   * @params Item : UI Item Name
   * @description Gets selector/locator from locatorMap based on Section and item name and verifies if displayed or not
   */
  async verifyItemInSectionIsDisplayed(falseCase, Section: string, Item: string) {
    let locator: string = String(await this.locatorMap[String(Section).trim()][String(Item).trim()]);
    let selector = await $(locator)
    const displayed = await (selector).isDisplayed();
    await (await selector.scrollIntoView())
    if (falseCase) {
      expect(displayed).to.not.equal(
        true,
        `Expected element "${locator}" not to be displayed`
      );
      addText("Verified : " + Section + " > " + Item + " is not Displayed")
    } else {
      expect(displayed).to.equal(
        true,
        `Expected element "${locator}" to be displayed`
      );
      addText("Verified : " + Section + " > " + Item + " is Displayed")
    }
  }

}
const millionMorePage = new MillionMorePages();
export { millionMorePage };
