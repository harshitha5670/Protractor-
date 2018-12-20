import { AddSubscriberPage } from "../Pages/AddSubscriberPage"
import { AddDependentPage } from "../Pages/AddDependentPage"
import { AddProductsPage } from "../Pages/AddPoductsPage"
import { HomePage } from "../Pages/HomePage"
import { RandomValues } from "../Utils/Methods/RandomValues"
import { Library } from "../Utils/Methods/Library"
import { browser } from "protractor";
let subscriberDetails = new AddSubscriberPage()
let dependentDetails = new AddDependentPage()
let products = new AddProductsPage()
let home = new HomePage()
let lib = new Library
let values = new RandomValues()


describe("enroll a new subscriber", function () {
    browser.ignoreSynchronization = true
    browser.driver.manage().window().maximize()

    it("should navigate to the QA website and login to the application", function () {
        lib.loginToWebsite("qa","emailAddress","password")
        
    })
    it("should click on add subscriber module and enter all the details of the subscriber and navigate to the product page", function () {
        home.clickOnAddSubscriber()
        subscriberDetails.enterSSN(values.numbersInSplitFormat(9))
        subscriberDetails.enterClientId("clientID1")
        subscriberDetails.enterLastName("last")
        subscriberDetails.enterFirstName("first")
        subscriberDetails.enterMiddleName("M")
        subscriberDetails.subscriberDOB(20,3,"12")
        subscriberDetails.selectGenderFemale()
        subscriberDetails.enterAddressLine1("address line one")
        subscriberDetails.enterZipcode("texas")
        subscriberDetails.enterMobileNumber(values.numbersInSplitFormat(10))
        subscriberDetails.navigateToAddDependentScreeen()
    })
    it("should enter all the required details of the dependent and navigate to the products screen", function () {
        dependentDetails.selectTheRelationShip("SPOUSE")
        dependentDetails.enterDepenedentFistName("dependent")
        dependentDetails.dependentDOB(20, 4, "18")
        dependentDetails.selectDependententGendeeMale()
        dependentDetails.navigateToProductScreen()
    })
    it("should select the plans and enroll the subscriber successfully", function () {
        products.setMasterDateOfPlans(1, 0, "1")
        products.selectMedicalPlan(0)
        products.selectDentalPlan(0)
        products.selectVisionPlan(0)
        products.selectLifePlan(0)
        products.enrollVoluntaryPlan()
        products.clickOnSubmitButton()

    })

})
