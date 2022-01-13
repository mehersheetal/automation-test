import { Then } from "cucumber";
import { expect } from "chai";

import { menuPage } from "../pages/menuPage";
import { TIMEOUT_MS } from "../constants/globalConstants";
import { imageService } from "../support/imageService";
import { logger } from "../support/logger";
import { videoPage } from "../pages/videoPage";
import { millionMorePage } from "../pages/millionMorePage";


Then(
  /^I expect "([^"]*)?" model items is displayed$/,
  async function (selector: string) {
    logger.info(
      `data: ${selector}: element = `,
      await (await menuPage.getElementBySelector(selector)).getValue()
    );
    (await menuPage
      .getElementBySelector(selector))
      .waitForDisplayed(TIMEOUT_MS);
  }
);

Then(
  /^I expect "([^"]*)?" to be redirected to page with title "([^"]*)?"$/,
  async function (selector: string, pageTitle: string) {
    (await menuPage
      .getElementBySelector(selector))
      .waitForDisplayed(TIMEOUT_MS);

    expect(
      await (await menuPage.getElementBySelector(selector)).isClickable()
    ).to.equal(true);

    await (await menuPage.getElementBySelector(selector)).click();

    const title = await browser.getTitle();
    expect(title).to.contain(
      pageTitle,
      `Expected title to contain "${pageTitle}" but found "${title}"`
    );
  }
);

Then(
  /^I expect "([^"]*)?" to be redirected to page with link "([^"]*)?"$/,
  async function (selector: string, redirectUrl: string) {
    (await menuPage
      .getElementBySelector(selector))
      .waitForDisplayed(TIMEOUT_MS);

    const parentElement = await (await menuPage
      .getElementBySelector(selector))
      .$("..");

    const pageUrlToRedirect = await (await parentElement).getAttribute("href");
    expect(redirectUrl).to.contain(
      pageUrlToRedirect,
      `Expected Url to be equal "${pageUrlToRedirect}" but found"${redirectUrl}"`
    );
  }
);

Then(
  /^I expect the captured "([^"]*)?" image "([^"]*)?" to match baseline/,
  function (type: string, fileName: string) {
    imageService.checkImage(type, fileName);
  }
);

Then(
  /^I expect that element "([^"]*)?" is( not)* displayed$/,
  function (selector: string, falseCase: string): void {
    const displayed = $(selector).isDisplayed();

    if (falseCase) {
      expect(displayed).to.not.equal(
        true,
        `Expected element "${selector}" not to be displayed`
      );
    } else {
      expect(displayed).to.equal(
        true,
        `Expected element "${selector}" to be displayed`
      );
    }
  }
);

Then(
  /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
  function (selector: string, falseCase: string): void {
    $(selector).waitForDisplayed(TIMEOUT_MS, !!falseCase);
  }
);

Then(
  /^verify video is playing$/,
  async function (): Promise<void> {
    await videoPage.verifyVideoPlaying();
  }
);

Then(
  /^verify video is paused$/,
  async function (): Promise<void> {
    await videoPage.verifyVideoPaused();
  }
);

Then(
  /^below options should( not)* be available in the "([^"]*)?" :$/,
  async function (falseCase: string, section: string, dataTable) {
    console.log("Verifying Page:" + section);
    let data = dataTable.raw();
    console.log(data);
    for (const item of data) {
      await millionMorePage.verifyItemInSectionIsDisplayed(falseCase, section, item)
    }
    return;
  }
);
