import { AddSubscriber_Repository } from "../Repository/AddSubscriber_Repository"
import { Common } from "../Utils/Methods/Common"
import { browser } from "protractor";
import { Library } from "../Utils/Methods/Library";
import { JsonReader } from "../Utils/Methods/JsonReader"

let addSubscriber = new AddSubscriber_Repository()
let common = new Common()
let lib = new Library()
let read = new JsonReader()

export class AddSubscriberPage {

    public enterSSN(id: string) {
        addSubscriber.ssn.sendKeys(id)
    }
    public enterClientId(id: string) {
        common.action(addSubscriber.clientID, read.readData("D:\\Testing\\E2Etesting\\Utils\\Constants\\clientID.json", id), 3000)
    }
    public enterLastName(lastName: string) {
        addSubscriber.lastName.sendKeys(lastName)
    }
    public enterFirstName(firstName: string) {
        addSubscriber.firstName.sendKeys(firstName)
    }
    public enterMiddleName(middleName: string) {
        addSubscriber.middleName.sendKeys(middleName)
    }
    public selectGenderFemale() {
        addSubscriber.genderFemale.click()
        if (addSubscriber.genderFemale.isSelected()) {
            console.log("gender is female")
        }
    }
    public selectGenderMale() {
        addSubscriber.genderMale.click()
        if (addSubscriber.genderMale.isSelected()) {
            console.log("gender is male")
        }
    }
    public enterAddressLine1(address1: string) {
        addSubscriber.addressLine1.sendKeys(address1)
    }
    public enterAddressLine2(address2: string) {
        addSubscriber.addressLine2.sendKeys(address2)
    }
    public enterZipcode(zipcode: string) {
        addSubscriber.zipCode.sendKeys(read.readData("D:\\Testing\\E2Etesting\\Utils\\Constants\\zipcode.json", zipcode))
        addSubscriber.city.click()
        addSubscriber.state.click()
    }
    public enterMobileNumber(mobile: string) {
        addSubscriber.mobileNumber.sendKeys(mobile)
    }
    public enterHomeNumber(home: string) {
        addSubscriber.homeNumber.sendKeys(home)
    }
    public enterWorkNumber(work: string) {
        addSubscriber.workNumber.sendKeys(work)
    }
    public enterEmailAddress(email: string) {
        addSubscriber.email.sendKeys(email)
    }
    public navigateToAddDependentScreeen() {
        addSubscriber.nextButton.click()
      //  browser.sleep(3000)
    }
    public navigateToProductScreen() {
        addSubscriber.addProductLink.click()
        browser.sleep(3000)
    }

    public subscriberDOB(year: number, month: number, date: string) {
        lib.clickOnCalenderBox()
        lib.selectYear(year)
        lib.selectMonth(month)
        lib.selectDate(date)
    }
        
}