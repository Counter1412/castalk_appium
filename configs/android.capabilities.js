const env = process.env.TEST_ENV || "test"; // default to dev

const capabilities = {
    dev: {
        "platformName": "Android",
        "appium:deviceName": "TECNO Mobile SPARK 10 Pro",
        "appium:udid": "3EB7DF109FCC7EF9",
        "appium:appPackage": "com.castalk.app.dev",
        "appium:appActivity": "com.castalk.app.feature.user.auth.AuthActivity",
        "appium:automationName": "UiAutomator2",
    },
    test: {
        "platformName": "Android",
        "appium:deviceName": "TECNO Mobile SPARK 10 Pro",
        "appium:udid": "3EB7DF109FCC7EF9",
        "appium:appPackage": "com.castalk.app.qa",
        "appium:appActivity": "com.castalk.app.feature.user.auth.AuthActivity",
        "appium:automationName": "UiAutomator2",
    },
    stage: {
        "platformName": "Android",
        "appium:deviceName": "TECNO Mobile SPARK 10 Pro",
        "appium:udid": "3EB7DF109FCC7EF9",
        "appium:appPackage": "com.castalk.app.stage",
        "appium:appActivity": "com.castalk.app.feature.user.auth.AuthActivity",
        "appium:automationName": "UiAutomator2",
    },
    prod: {
        "platformName": "Android",
        "appium:deviceName": "TECNO Mobile SPARK 10 Pro",
        "appium:udid": "3EB7DF109FCC7EF9",
        "appium:appPackage": "com.castalk.app.prod",
        "appium:appActivity": "com.castalk.app.feature.user.auth.AuthActivity",
        "appium:automationName": "UiAutomator2",
    },
    CI: {
        "platformName": "Android",
        "appium:deviceName": "emulator-5554",
        "appium:app": process.env.APK_PATH || "/path/to/app.apk",
        "appium:automationName": "UiAutomator2",
        "appium:appPackage": "com.ca.app.prod",
        "appium:appActivity": "com.ca.app.feature.user.auth.AuthActivity",
        "appium:noReset": true
    }
};

module.exports = capabilities[env];