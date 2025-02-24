const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hema2c",
  e2e: {
  //baseUrl: process.env.CYPRESS_BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    username: process.env.CYPRESS_USERNAME,
    password: process.env.CYPRESS_PASSWORD,
  }
});
