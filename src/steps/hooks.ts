import { After, Before, HookScenarioResult } from "cucumber";
import { logger } from "../support/logger";
import { addObject, addScreenshot } from "../support/reporter";

Before({ tags: "@OnlyChrome" }, () => {
  if (browser.capabilities.browserName !== "chrome") {
    return "skipped";
  }
  return undefined;
});

Before({ tags: "@OnlyFirefox" }, () => {
  if (browser.capabilities.browserName !== "firefox") {
    return "skipped";
  }
  return undefined;
});

Before({ tags: "@Pending" }, () => {
  return "skipped";
});

Before((Scenario) => {
  // We are setting browser size, while executing test runners.
  browser.setWindowSize(
    parseInt(process.env.SCREEN_WIDTH, 10),
    parseInt(process.env.SCREEN_HEIGHT, 10)
  );
  logger.info("============================================")
  logger.info("Started Scenario : " + Scenario.pickle.name);
})

After((scenario: HookScenarioResult) => {
  logger.info("Result : " + scenario.pickle.name + " | " + scenario.result.status);
  addObject({
    browser: {
      url: browser.getUrl(),
      title: browser.getTitle(),
    },
    duration: scenario.result.duration,
    status: scenario.result.status,
    error: scenario.result.exception,
  });
  addScreenshot();
});
