const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const mysql = require("mysql");

function queryTestDb(query, config) {
  // create a new mysql connection using credentials from env's
  const connection = mysql.createConnection(config.env.db);
  // start connection to db
  connection.connect();
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if(error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
}

// module.exports = (on, config) => {
  
// };
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: false,
    numTestsKeptInMemory: 10,
    experimentalMemoryManagement: true,
    baseUrl: 'https://www.saucedemo.com',
    specPattern: ['cypress/e2e/**/*.{js,jsx,ts,tsx}','**/*.{feature,features}'],
    //specPattern: '**/*.{feature,features}',
    excludeSpecPattern: ['cypress/e2e/1-getting-started/*', 'cypress/e2e/2-advance-examples/*'],
    experimentalStudio: true,
    pageLoadTimeout: 100000,
    //testFiles: "**/*.feature",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Rahul Demo Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    env: {
      db: {
        host: 'localhost',
        user: 'me',
        password: 'secret',
        database: 'my_db'
      }
    },
  },
});
