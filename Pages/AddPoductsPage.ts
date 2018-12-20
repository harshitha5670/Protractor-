import { AddProduct_Repository } from "../Repository/AddProduct_Repository"
import { Common } from "../Utils/Methods/Common"
import { Library } from "../Utils/Methods/Library"
import { protractor } from "protractor/built/ptor";
import { browser } from "protractor";

let addProducts = new AddProduct_Repository()
let common = new Common()
let lib = new Library()

export class AddProductsPage {

    public selectEnrollmentType(type: string) {
        common.selectByVisibleText(addProducts.enrollementType,type)
    }
    public selectBargainingUnit(unit: string) {
        common.selectByVisibleText(addProducts.bargainingUnit, unit)
    }
    public setMasterDateOfPlans(year: number, month: number, date: string) {
        lib.clickOnCalenderBox()
        lib.selectYear(year)
        lib.selectMonth(month)
        lib.selectDate(date)
    }
    public selectMedicalPlan(medicalPlan: number) {
        common.selectByIndex(addProducts.selectMedicalPlan, medicalPlan)
    }
    public selectDentalPlan(dentalPlan: number) {
        common.selectByIndex(addProducts.selectDentalPlan, dentalPlan)
    }
    public selectVisionPlan(visionPlan: number) {
        common.selectByIndex(addProducts.selectVisionPlan, visionPlan)
    }
    public selectLifePlan(lifePlan: number) {
        common.selectByIndex(addProducts.selectLifePlan, lifePlan)
    }
    public enrollVoluntaryPlan() {
        addProducts.enrollVoluntaryPlan.click()
        browser.sleep(3000)
    }
    public enterCoverageAmount(amount: number) {
        addProducts.coverageAmount.sendKeys(amount)
        addProducts.coverageAmount.sendKeys(protractor.Key.TAB)
    }
    public enrollChildForVoluntary() {
        addProducts.enrollChild.click()
        browser.sleep(4000)
    }
    public clickOnSubmitButton() {
        addProducts.submitButton.click()
        browser.sleep(3000)
    }
}
