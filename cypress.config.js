

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,
  testFiles: "**/*.feature",
  integration: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.feature',
  },
})
