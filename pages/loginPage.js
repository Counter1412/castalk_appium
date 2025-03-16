const BasePage = require('./basePage');

class LoginPage extends BasePage{
    get signInWithEmailBtn() { return $(`//android.widget.TextView[@text="Sign in with email"]`); }
    get emailBox() { return $(`//android.widget.ScrollView/android.widget.EditText[1]`); }
    get passwordBox() { return $(`//android.widget.ScrollView/android.widget.EditText[2]`); }
    get signInBtn() { return $(`//android.widget.TextView[@text="Sign In"]/following-sibling::android.widget.Button`); }
    get agreeAndContinue() { return $(`//android.widget.TextView[@text="Agree and Continue"]`); }
    get allowNotifications() { return $(`//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]`); }
    get homeButton() { return $(`//android.widget.TextView[@text="Home"]`); }

    async login(email, password) {
        await this.signInWithEmailBtn.tap();
        await this.emailBox.setValue(email);
        await this.passwordBox.setValue(password);
        await this.signInBtn.click();
        await this.agreeAndContinue.click();
        await this.allowNotifications.click();
        await this.waitForSpecificTime(1000)
        await this.waitForElementToBeDisplayed(this.homeButton);
    }
}

module.exports = new LoginPage();