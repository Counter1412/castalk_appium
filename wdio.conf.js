const androidCaps = require("./configs/android.capabilities");

exports.config = {
    runner: "local",
    host: "localhost",
    port: 4723,
    specs: ["./tests/login.test.js"],
    capabilities: [androidCaps],
    framework: "mocha",
    mochaOpts: {
      timeout: 60000
    }
  };