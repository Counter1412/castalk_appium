
class SignUpPage {
    get signUpBtnLocation() { return { x: 772, y: 1445 } }
    get signUpBtn() { return $(`//android.widget.TextView[@text="Don’t have an account? Sign up here"]`) }
    get emailBox() { return $(`//android.widget.ScrollView/android.widget.EditText[1]`) }
    get passwordBox() { return $(`//android.widget.ScrollView/android.widget.EditText[2]`) }
    get agreeAndContinueBtn() { return $(`//android.widget.TextView[@text="Agree and Continue"]/following-sibling::android.widget.Button`) }
    get pinCodeBox() { return $`//android.widget.TextView[@text="Verification Code"]/following-sibling::android.widget.EditText` }
    get firstBoxLocation() { return { x: 136, y: 992 } }
    get secondBoxLocation() { return { x: 300, y: 992 } }
    get thirdBoxLocation() { return { x: 482, y: 992 } }
    get fourthBoxLocation() { return { x: 622, y: 992 } }
    get fifthBoxLocation() { return { x: 791, y: 992 } }
    get sixthBoxLocation() { return { x: 950, y: 992 } }

    async clickButton(location) {
        await this.signUpBtn.waitForDisplayed({ timeout: 5000 })
        await browser.action('pointer', {
            parameters: { pointerType: 'touch' }
        })
            .move(location)
            .down()
            .up()
            .perform();
    }

    async setValueToBox(location, value) {
        await browser.action('pointer', { 
            parameters: { pointerType: 'touch' } 
        })
            .move(location)
            .down()
            .up()
            .perform();

        await browser.action('key')
            .down(value)
            .up(value)
            .perform();
    }

    async signUp(email, password) {
        await this.clickButton(this.signUpBtnLocation);
        await this.emailBox.setValue(email);
        await this.passwordBox.setValue(password);
        await this.agreeAndContinueBtn.click();

        await this.setValueToBox(this.firstBoxLocation, '1');
        await this.setValueToBox(this.secondBoxLocation, '1');
        await this.setValueToBox(this.thirdBoxLocation, '1');
        await this.setValueToBox(this.fourthBoxLocation, '1');
        await this.setValueToBox(this.fifthBoxLocation, '1');
        await this.setValueToBox(this.sixthBoxLocation, '1');

    }
}

module.exports = new SignUpPage();