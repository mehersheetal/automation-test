export const reportingConfig = {

  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: [
    "spec",
    [
      "cucumberjs-json",
      {
        jsonFolder: "./report/cucumber/",
      },
    ],
    [
      "allure",
      {
        outputDir: "./report/allure/",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  cucumberOpts: {
    backtrace: false,
    failAmbiguousDefinitions: true,
    failFast: false,
    ignoreUndefinedDefinitions: false,
    name: [],
    snippets: true,
    source: true,
    profile: [],
    require: ["./src/steps/**/*.ts"],
    snippetSyntax: undefined,
    strict: true,
    tagsInTitle: false,
    tagExpression: "not @Pending", // tagExpression: "@Image" , Keep Empty for running all scenarios
    timeout: 120000,
  },
};
