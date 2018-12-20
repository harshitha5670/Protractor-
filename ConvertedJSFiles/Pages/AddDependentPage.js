"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddDependent_Repository_1 = require("../Repository/AddDependent_Repository");
const Common_1 = require("../Utils/Methods/Common");
const Library_1 = require("../Utils/Methods/Library");
let addDependent = new AddDependent_Repository_1.AddDependent_Repository();
let common = new Common_1.Common();
let lib = new Library_1.Library();
class AddDependentPage {
    selectTheRelationShip(visibleText) {
        common.selectByVisibleText(addDependent.relationshipDDL, visibleText);
    }
    enterDependentSSN(ssn) {
        addDependent.ssn.sendKeys(ssn);
    }
    enterDependentLastName(dLastName) {
        addDependent.lastName.sendKeys(dLastName);
    }
    enterDepenedentFistName(dFirstName) {
        addDependent.firstName.sendKeys(dFirstName);
    }
    enterDependentMiddleName(dMiddleName) {
        addDependent.middleName.sendKeys(dMiddleName);
    }
    dependentDOB(year, month, date) {
        lib.clickOnCalenderBox();
        lib.selectYear(year);
        lib.selectMonth(month);
        lib.selectDate(date);
    }
    selectDependentGenderFemale() {
        addDependent.genderFemale.click();
    }
    selectDependententGendeeMale() {
        addDependent.genderMale.click();
    }
    navigateToProductScreen() {
        addDependent.nextButton.click();
    }
}
exports.AddDependentPage = AddDependentPage;
