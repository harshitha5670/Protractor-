"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPage_1 = require("../Pages/LoginPage");
let login = new LoginPage_1.LoginPage();
describe("login to the website", function () {
    protractor_1.browser.ignoreSynchronization = true;
    it("should login to the website");
    protractor_1.browser.get("https://hearwebapp-qa.azurewebsites.net");
    login.enterEmailAddress("hmuralidhara@teksystems.com");
    login.clickOnNextButton();
    login.enterPassword("w@terboTTle@5670");
    login.clickYes();
});
