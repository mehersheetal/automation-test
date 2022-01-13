const report = require('multiple-cucumber-html-reporter');

function addCIMetadata(customData) {
  return customData;
}

const customData = {
  title: 'Run info',
  data: [
    {
      label: 'Project',
      value: 'Volvo - Campaign ( A Million more )'
    },
    {
      label: 'Generated at: ',
      value: new Date()
    }
  ]
};

report.generate({
  jsonDir: './report/cucumber/',
  reportPath: './report/cucumber/html',
  displayDuration: true,
  removeFolders: true,

  pageTitle: 'Volvo Campaign | Test Report',
  reportName: 'Volvo Campaign Test Report',
  openReportInBrowser: true,
  pageFooter:
    '<div class="created-by"><p>&copy; Volvo Campaign Team</p></div>',

  customData: addCIMetadata(customData),
});

