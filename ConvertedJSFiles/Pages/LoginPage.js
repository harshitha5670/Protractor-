"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Login_Repository_1 = require("../Repository/Login_Repository");
const protractor_1 = require("protractor");
let login = new Login_Repository_1.Login_Repository();
class LoginPage {
    enterEmailAddress(emailId) {
        login.emailAddress.sendKeys(emailId);
        protractor_1.browser.sleep(3000);
    }
    enterPassword(passwrd) {
        login.password.sendKeys(passwrd);
        protractor_1.browser.sleep(3000);
    }
    clickOnNextButton() {
        login.nextButton.click();
        protractor_1.browser.sleep(3000);
    }
    handleSignUp() {
        try {
            login.yes.click();
        }
        catch (error) {
            return error;
        }
    }
}
exports.LoginPage = LoginPage;
