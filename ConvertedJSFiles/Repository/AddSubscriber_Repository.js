"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddSubscriber_Repository {
    constructor() {
        this.lastName = protractor_1.element(protractor_1.by.xpath("//label[.='Last Name']/..//hear2-input-controls/input"));
        this.firstName = protractor_1.element(protractor_1.by.xpath("//label[.='First Name']/..//hear2-input-controls/input"));
        this.middleName = protractor_1.element(protractor_1.by.xpath("//label[.='Middle Initial']/..//hear2-input-controls/input"));
        this.ssn = protractor_1.element(protractor_1.by.xpath("//label[.='SSN']/..//input"));
        this.clientID = protractor_1.element(protractor_1.by.xpath("//label[.='Client ']/../..//div//div//div//div/input"));
        this.calender = protractor_1.element(protractor_1.by.xpath("//div[@class='calender-box']/input"));
        this.year = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-year']/option"));
        this.month = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-month']/option"));
        this.date = protractor_1.element.all(protractor_1.by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"));
        this.genderFemale = protractor_1.element(protractor_1.by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
        this.genderMale = protractor_1.element(protractor_1.by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
        this.addressLine1 = protractor_1.element(protractor_1.by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"));
        this.addressLine2 = protractor_1.element(protractor_1.by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"));
        this.zipCode = protractor_1.element(protractor_1.by.xpath("//label[.='Zipcode']/..//input"));
        this.city = protractor_1.element(protractor_1.by.xpath("//label[.='City']"));
        this.state = protractor_1.element(protractor_1.by.xpath("//label[.='State']"));
        this.mobileNumber = protractor_1.element(protractor_1.by.xpath("//label[.='Mobile']/..//input"));
        this.homeNumber = protractor_1.element(protractor_1.by.xpath("//label[.='Home']/..//input"));
        this.workNumber = protractor_1.element(protractor_1.by.xpath("//label[.='Work']/..//input"));
        this.email = protractor_1.element(protractor_1.by.xpath("//label[.='Email']/..//input"));
        this.nextButton = protractor_1.element(protractor_1.by.xpath("//span[.='Next:']"));
        this.cobCheckbox = protractor_1.element(protractor_1.by.xpath("//h3[.='COB']/../..//span"));
        this.benifitStartDate = protractor_1.element(protractor_1.by.xpath("//label[.='Benefit Start Date']/..//div/input"));
        this.benifitEndDate = protractor_1.element(protractor_1.by.xpath("//label[.='Benefit End Date']/..//div/input"));
        this.venderCode = protractor_1.element(protractor_1.by.xpath("//label[.='Vendor Code']"));
        this.venderSubscriberCode = protractor_1.element(protractor_1.by.xpath("//label[.='Vendor Subscriber Code']"));
        this.planDetails = protractor_1.element(protractor_1.by.xpath("//label[.='Plan Details']"));
        this.medicareCheckbox = protractor_1.element(protractor_1.by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
        this.medicarePartADate = protractor_1.element(protractor_1.by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
        this.medicarePartBDate = protractor_1.element(protractor_1.by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
        this.medicareOverrideDate = protractor_1.element(protractor_1.by.xpath("//label[.='Override Date']/..//div/input"));
        this.medicarePlan = protractor_1.element(protractor_1.by.xpath("//label[.='Medicare Plan #']"));
        this.overrideDate = protractor_1.element(protractor_1.by.xpath("//button[.='Cancel']"));
        this.addProductLink = protractor_1.element(protractor_1.by.xpath("//a[.='Go to Add Products']"));
    }
}
exports.AddSubscriber_Repository = AddSubscriber_Repository;
