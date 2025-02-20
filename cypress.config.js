const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hema2c",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
