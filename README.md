(Steps for running appium server and execute tests on real devices, because no .apk is provided for testing)
1. Install all dependencies needed for running test
   + npm i
3. Install appium server and setup path
4. Install allure (and java) and setup path
5. Update device id and device name in capabilities
6.  Run the test
   + npm run smoke-test-suite
7. Prepare the report and open report
   + npm run prepare-report-after-run
   + npm run open-test-report
