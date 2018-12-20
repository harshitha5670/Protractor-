"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddProduct_Repository_1 = require("../Repository/AddProduct_Repository");
const Common_1 = require("../Utils/Methods/Common");
const Library_1 = require("../Utils/Methods/Library");
const ptor_1 = require("protractor/built/ptor");
const protractor_1 = require("protractor");
let addProducts = new AddProduct_Repository_1.AddProduct_Repository();
let common = new Common_1.Common();
let lib = new Library_1.Library();
class AddProductsPage {
    selectEnrollmentType(type) {
        common.selectByVisibleText(addProducts.enrollementType, type);
    }
    selectBargainingUnit(unit) {
        common.selectByVisibleText(addProducts.bargainingUnit, unit);
    }
    setMasterDateOfPlans(year, month, date) {
        lib.clickOnCalenderBox();
        lib.selectYear(year);
        lib.selectMonth(month);
        lib.selectDate(date);
    }
    selectMedicalPlan(medicalPlan) {
        common.selectByIndex(addProducts.selectMedicalPlan, medicalPlan);
    }
    selectDentalPlan(dentalPlan) {
        common.selectByIndex(addProducts.selectDentalPlan, dentalPlan);
    }
    selectVisionPlan(visionPlan) {
        common.selectByIndex(addProducts.selectVisionPlan, visionPlan);
    }
    selectLifePlan(lifePlan) {
        common.selectByIndex(addProducts.selectLifePlan, lifePlan);
    }
    enrollVoluntaryPlan() {
        addProducts.enrollVoluntaryPlan.click();
        protractor_1.browser.sleep(3000);
    }
    enterCoverageAmount(amount) {
        addProducts.coverageAmount.sendKeys(amount);
        addProducts.coverageAmount.sendKeys(ptor_1.protractor.Key.TAB);
    }
    enrollChildForVoluntary() {
        addProducts.enrollChild.click();
        protractor_1.browser.sleep(4000);
    }
    clickOnSubmitButton() {
        addProducts.submitButton.click();
        protractor_1.browser.sleep(3000);
    }
}
exports.AddProductsPage = AddProductsPage;
