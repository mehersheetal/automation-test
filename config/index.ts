import { hooksConfig } from "./hooks.config";
import { reportingConfig } from "./reporting.config";
import { serverConfig } from "./server.config";
import { serviceConfig } from "./service.config";
import { testsConfig } from "./tests.config";

export const config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: "local",

  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "http://localhost",

  framework: "cucumber",

  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 10,
  //
  // Capabilities configuration for Google Chrome & Firefox.
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 1,
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          '--no-sandbox',
        ].concat(
          process.env.VNC_SUPPORT === 'true' ? [
            // When debugging with VNC support headless mode is not enabled
            // to allow viewing actions in the browser.
          ] : [
            '--headless',
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--no-sandbox'
          ],
        ),
      },
      "cjson:metadata": {
        device: process.env.SELENIUM_VERSION,
      },
    },
    {
      // maxInstances can get overwritten per capability. So if you have an in-house Selenium
      // grid with only 5 firefox instances available you can make sure that not more than
      // 5 instances get started at a time.
      maxInstances: 2,
      browserName: "firefox",
      'moz:firefoxOptions': {
        args: [].concat(
          process.env.VNC_SUPPORT === 'true' ? [
            // When debugging with VNC support headless mode is not enabled
            // to allow viewing actions in the browser.
          ] : [

            '-headless', '--width=1920', '--height=1200'
          ]),
      },
      acceptInsecureCerts: true,
      "cjson:metadata": {
        device: process.env.SELENIUM_VERSION,
      },
    },
  ],

  sync: false,

  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "warn",
  deprecationWarnings: true,

  ...serviceConfig,
  ...serverConfig,
  ...testsConfig,
  ...reportingConfig,
  ...hooksConfig,
};
