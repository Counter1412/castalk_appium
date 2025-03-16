const androidCaps = require("./configs/android.capabilities");

exports.config = {
  runner: "local",
  host: "localhost",
  port: 4723,
  maxInstances: 1,
  suites: {
    smoke: [
      "tests/**.test.js"
    ]
  },
  specs: [
    "tests/login.test.js",
    "tests/signup.test.js"
  ],
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],
  capabilities: [androidCaps],
  framework: "mocha",
  mochaOpts: {
    timeout: 60000
  },
};