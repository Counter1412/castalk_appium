class BasePage {
    async waitForElementToBeDisplayed(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout });
    }

    async waitForElementToBeEnabled(element, timeout = 5000) {
        await element.waitForEnabled({ timeout });
    }

    async waitForElementToBeClickable(element, timeout = 5000) {
        await element.waitForClickable({ timeout });
    }

    async waitForElementToDisappear(element, timeout = 5000) {
        await element.waitForDisplayed({ timeout, reverse: true });
    }

    async waitForSpecificTime(time) {
        await browser.pause(time);
    }

    async reloadSession() {
        await browser.reloadSession()
    }
}

module.exports = BasePage;
