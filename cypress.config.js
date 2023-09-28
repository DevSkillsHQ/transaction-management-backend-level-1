const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    apiUrl: 'http://localhost:8080',
  },
  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },
})