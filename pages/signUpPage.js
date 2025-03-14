class SignUpPage {
    get signUpElementId() {return '(1, 540, 1445, 100)'}
    get signUpBtn() { return $(`//android.widget.TextView[@text="Don’t have an account? Sign up here"]`) }
    get emailBox() { return $(`//android.widget.ScrollView/android.widget.EditText[1]`) }
    get passwordBox() { return $(`//android.widget.ScrollView/android.widget.EditText[2]`) }
    get agreeAndContinueBtn() { return $(`//android.widget.TextView[@text="Agree and Continue"]/following-sibling::android.widget.Button`) }
    get pinCodeBox() {return $`//android.widget.TextView[@text="Verification Code"]/following-sibling::android.widget.EditText`}

    async clickSignUpBtn() {
        await this.signUpBtn.waitForExist({ timeout: 5000 }); // Ensure element is present
        await this.signUpBtn.tap(); 
    }


    async signUp(email, password) {
        await this.clickSignUpBtn();
        await this.emailBox.setValue(email);
        await this.passwordBox.setValue(password);
        await this.agreeAndContinueBtn.click();
        await this.pinCodeBox.setValue('111111');
    }
}

module.exports = new SignUpPage();