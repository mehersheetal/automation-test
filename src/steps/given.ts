import { Given } from "cucumber";
import { menuPage } from "../pages/menuPage";
/**
 * Reusing code based on regex parameters in other feature files.
 */
Given(/^I open the url "([^"]*)?"$/, function (urlToLoad: string): void {
  browser.url(urlToLoad);
  browser.maximizeWindow()
  browser.pause(3000)
});

Given(/^I open the url "([^"]*)?" and accept cookies$/, async function (urlToLoad: string): Promise<void> {
  await browser.url(urlToLoad);
  await browser.maximizeWindow()
  await browser.setWindowSize(parseInt(process.env.SCREEN_WIDTH), parseInt(process.env.HEIGHT))
  await menuPage.handlingCookieAlert();
  await menuPage.acceptCookie();
});
