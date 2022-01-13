import log from "@wdio/logger";
import BasePage from "./basePage";
const logger = log("@MillionMorePage");

class MenuPages extends BasePage {
  constructor() {
    super();
    logger.info("MillionMore selector constructor, page object model setup");
  }



  //Menu Items
  get purchaseNav(): WebdriverIO.Element { return this.getElementByPartialText("h3", "Purchase"); }
  get ownerInfoNav(): WebdriverIO.Element { return this.getElementByPartialText("h3", "Owner"); }
  get fleetSalesNav(): WebdriverIO.Element { return this.getElementByPartialText("em", "Fleet"); }
  get buyNav(): WebdriverIO.Element { return this.getElementByPartialText("em", "Buy"); }
  get ownNav(): WebdriverIO.Element { return this.getElementByText("em", "Own"); }
  get supportNav(): WebdriverIO.Element { return this.getElementByPartialText("em", "Support"); }
  get usedCarsNav(): WebdriverIO.Element { return this.getElementByPartialText("em", "Used cars"); }
  get optionsOpen(): WebdriverIO.Element { return $("button[id='sitenav-sidenav-toggle']"); }
  get sideNavigationContainer(): WebdriverIO.Element { return $("div[data-autoid='nav:sideNavigationContainer']"); }
  get optionsClose(): WebdriverIO.Element { return $("button[data-autoid='nav:siteNavCloseIcon']"); }

  async getElementBySelector(lSelector: string) {
    // console.log(`Selector we are looking for ${lSelector}`);
    switch (lSelector) {
      case "Buy": { return this.buyNav; }
      case "Own": { return this.ownNav; }
      case "Owner info": { return this.ownerInfoNav; }
      case "Support": { return this.supportNav; }
      case "Purchase": { return this.purchaseNav; }
      case "Fleet Sales": { return this.fleetSalesNav; }
      case "Used cars": { return this.usedCarsNav; }

      default: {
        console.log(`Executing default routine`);
        return this.buyNav;
      }
    }
  }
}

const menuPage = new MenuPages();
export { menuPage };
