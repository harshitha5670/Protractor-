"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddSubscriberPage_1 = require("../Pages/AddSubscriberPage");
const AddDependentPage_1 = require("../Pages/AddDependentPage");
const AddPoductsPage_1 = require("../Pages/AddPoductsPage");
const HomePage_1 = require("../Pages/HomePage");
const RandomValues_1 = require("../Utils/Methods/RandomValues");
const Library_1 = require("../Utils/Methods/Library");
const protractor_1 = require("protractor");
let subscriberDetails = new AddSubscriberPage_1.AddSubscriberPage();
let dependentDetails = new AddDependentPage_1.AddDependentPage();
let products = new AddPoductsPage_1.AddProductsPage();
let home = new HomePage_1.HomePage();
let lib = new Library_1.Library;
let values = new RandomValues_1.RandomValues();
describe("enroll a new subscriber", function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.driver.manage().window().maximize();
    it("should navigate to the QA website and login to the application", function () {
        lib.loginToWebsite("qa", "emailAddress", "password");
    });
    it("should click on add subscriber module and enter all the details of the subscriber and navigate to the product page", function () {
        home.clickOnAddSubscriber();
        subscriberDetails.enterSSN(values.numbersInSplitFormat(9));
        subscriberDetails.enterClientId("clientID1");
        subscriberDetails.enterLastName("last");
        subscriberDetails.enterFirstName("first");
        subscriberDetails.enterMiddleName("M");
        subscriberDetails.subscriberDOB(20, 3, "12");
        subscriberDetails.selectGenderFemale();
        subscriberDetails.enterAddressLine1("address line one");
        subscriberDetails.enterZipcode("texas");
        subscriberDetails.enterMobileNumber(values.numbersInSplitFormat(10));
        subscriberDetails.navigateToAddDependentScreeen();
    });
    it("should enter all the required details of the dependent and navigate to the products screen", function () {
        dependentDetails.selectTheRelationShip("SPOUSE");
        dependentDetails.enterDepenedentFistName("dependent");
        dependentDetails.dependentDOB(20, 4, "18");
        dependentDetails.selectDependententGendeeMale();
        dependentDetails.navigateToProductScreen();
    });
    it("should select the plans and enroll the subscriber successfully", function () {
        products.setMasterDateOfPlans(1, 0, "1");
        products.selectMedicalPlan(0);
        products.selectDentalPlan(0);
        products.selectVisionPlan(0);
        products.selectLifePlan(0);
        products.enrollVoluntaryPlan();
        //products.enterCoverageAmount(20000)
        products.clickOnSubmitButton();
    });
});
