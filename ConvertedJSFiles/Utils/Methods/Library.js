"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Common_1 = require("../Methods/Common");
const JsonReader_1 = require("../Methods/JsonReader");
const LoginPage_1 = require("../../Pages/LoginPage");
let common = new Common_1.Common();
let read = new JsonReader_1.JsonReader();
let login = new LoginPage_1.LoginPage();
class Library {
    clickOnCalenderBox() {
        Library.calender.click();
    }
    selectYear(year) {
        common.selectByIndex(Library.year, year);
    }
    selectMonth(month) {
        common.selectByIndex(Library.month, month);
    }
    selectDate(date) {
        common.selectByVisibleText(Library.date, date);
    }
    loginToWebsite(environment, email, password) {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get(read.readData("D:\\typescript\\E2Etesting\\Utils\\Constants\\baseUrl.json", environment));
        login.enterEmailAddress(read.readData("D:\\typescript\\E2Etesting\\Utils\\Constants\\loginCradentials.json", email));
        login.clickOnNextButton();
        login.enterPassword(read.readData("D:\\typescript\\E2Etesting\\Utils\\Constants\\loginCradentials.json", password));
        login.clickOnNextButton();
        login.handleSignUp();
    }
}
Library.calender = protractor_1.element(protractor_1.by.xpath("//div[@class='calender-box']/input"));
Library.year = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-year']/option"));
Library.month = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-month']/option"));
Library.date = protractor_1.element.all(protractor_1.by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"));
exports.Library = Library;
