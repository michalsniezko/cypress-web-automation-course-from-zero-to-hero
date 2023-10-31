const { defineConfig } = require('cypress')
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = defineConfig({
  env: {
    "cypress-plugin-snapshots": {
      "imageConfig": {
        "createDiffImage": true,                // Should a "diff image" be created, can be disabled for performance
        "threshold": 0.01,                      // Amount in pixels or percentage before snapshot image is invalid
        "thresholdType": "percent",             // Can be either "pixel" or "percent"
      }
    }
  },

  projectId: '3yk7bo',
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples', "**/__snapshots__/*", "**/__image_snapshots__/*"],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      // implement node event listeners here
      initPlugin(on, config);
      return config;

    },

  }
});
