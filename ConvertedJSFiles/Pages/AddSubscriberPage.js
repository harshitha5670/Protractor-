"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddSubscriber_Repository_1 = require("../Repository/AddSubscriber_Repository");
const Common_1 = require("../Utils/Methods/Common");
const protractor_1 = require("protractor");
const Library_1 = require("../Utils/Methods/Library");
const JsonReader_1 = require("../Utils/Methods/JsonReader");
let addSubscriber = new AddSubscriber_Repository_1.AddSubscriber_Repository();
let common = new Common_1.Common();
let lib = new Library_1.Library();
let read = new JsonReader_1.JsonReader();
class AddSubscriberPage {
    enterSSN(id) {
        addSubscriber.ssn.sendKeys(id);
    }
    enterClientId(id) {
        common.action(addSubscriber.clientID, read.readData("D:\\Testing\\E2Etesting\\Utils\\Constants\\clientID.json", id), 3000);
    }
    enterLastName(lastName) {
        addSubscriber.lastName.sendKeys(lastName);
    }
    enterFirstName(firstName) {
        addSubscriber.firstName.sendKeys(firstName);
    }
    enterMiddleName(middleName) {
        addSubscriber.middleName.sendKeys(middleName);
    }
    selectGenderFemale() {
        addSubscriber.genderFemale.click();
        if (addSubscriber.genderFemale.isSelected()) {
            console.log("gender is female");
        }
    }
    selectGenderMale() {
        addSubscriber.genderMale.click();
        if (addSubscriber.genderMale.isSelected()) {
            console.log("gender is male");
        }
    }
    enterAddressLine1(address1) {
        addSubscriber.addressLine1.sendKeys(address1);
    }
    enterAddressLine2(address2) {
        addSubscriber.addressLine2.sendKeys(address2);
    }
    enterZipcode(zipcode) {
        addSubscriber.zipCode.sendKeys(read.readData("D:\\Testing\\E2Etesting\\Utils\\Constants\\zipcode.json", zipcode));
        addSubscriber.city.click();
        addSubscriber.state.click();
    }
    enterMobileNumber(mobile) {
        addSubscriber.mobileNumber.sendKeys(mobile);
    }
    enterHomeNumber(home) {
        addSubscriber.homeNumber.sendKeys(home);
    }
    enterWorkNumber(work) {
        addSubscriber.workNumber.sendKeys(work);
    }
    enterEmailAddress(email) {
        addSubscriber.email.sendKeys(email);
    }
    navigateToAddDependentScreeen() {
        addSubscriber.nextButton.click();
        //  browser.sleep(3000)
    }
    navigateToProductScreen() {
        addSubscriber.addProductLink.click();
        protractor_1.browser.sleep(3000);
    }
    subscriberDOB(year, month, date) {
        lib.clickOnCalenderBox();
        lib.selectYear(year);
        lib.selectMonth(month);
        lib.selectDate(date);
    }
}
exports.AddSubscriberPage = AddSubscriberPage;
