const { defineConfig } = require("cypress");
const allureWriter=require('@shelex/cypress-allure-plugin/writer');
const{verifyDownloadTasks}=require('cy-verify-downloads')
module.exports = defineConfig({
  chromeWebSecurity:false,
  experimentalSessionAndOrigin:true,
  experimentalStudio:true,
  includeShadowDom:true,
  experimentalModifyObstructiveThirdPartyCode:true,
  pageLoadTimeout:10000,
  defaultCommandTimeou:10000,
  viewportHeight:1080,
  viewportWidth:1920,
  waitForAnimations:true,
  numTestsKeptInMemory:500,
  screenshotOnRunFailure:true,
  video:false,
  env:{
    username: 'kiran',
    password: 'password123',
    urlPath:'https://google.com'
  },
  retries:{
    runMode:1,
    openMode:1
  },
  e2e: {
    baseUrl:'https://google.com',
    specPattern: 'cypress/e2e/**/*.*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',verifyDownloadTasks);
      require('@cypress/grep/src/plugin')(config),
      allureWriter(on,config);
      return config;
    },
  },
});
