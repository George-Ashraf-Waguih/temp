const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'junit',
  reporterOptions: {
    mochaFile: 'results/test-results.xml', // Specify the directory where the XML file will be saved
    toConsole: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.js",
    baseUrl: "https://www.webdriveruniversity.com/"
  },
});
