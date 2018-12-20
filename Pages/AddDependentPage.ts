import { AddDependent_Repository } from "../Repository/AddDependent_Repository"
import { Common } from "../Utils/Methods/Common"
import { Library } from "../Utils/Methods/Library"
import { browser, ElementArrayFinder } from "protractor"

let addDependent = new AddDependent_Repository()
let common = new Common()
let lib = new Library()

export class AddDependentPage {

    public selectTheRelationShip(visibleText: string) {
        common.selectByVisibleText(addDependent.relationshipDDL, visibleText)
    }
    public enterDependentSSN(ssn: string) {
        addDependent.ssn.sendKeys(ssn)
    }
    public enterDependentLastName(dLastName: string) {
        addDependent.lastName.sendKeys(dLastName)
    }
    public enterDepenedentFistName(dFirstName: string) {
        addDependent.firstName.sendKeys(dFirstName)
    }
    public enterDependentMiddleName(dMiddleName: string) {
        addDependent.middleName.sendKeys(dMiddleName)
    }
    public dependentDOB(year: number, month: number, date: string) {
        lib.clickOnCalenderBox()
        lib.selectYear(year)
        lib.selectMonth(month)
        lib.selectDate(date)
    }
    public selectDependentGenderFemale() {
        addDependent.genderFemale.click()
    }
    public selectDependententGendeeMale() {
        addDependent.genderMale.click()
    }
    public navigateToProductScreen() {
        addDependent.nextButton.click()
                
    }

}