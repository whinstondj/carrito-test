const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hema2c",
  recordKey: '3e1c083f-437d-46da-aab0-7aba7007982a',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
