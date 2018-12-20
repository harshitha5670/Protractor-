"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddDependent_Repository {
    constructor() {
        this.relationshipDDL = protractor_1.element.all(protractor_1.by.xpath("//label[.='Relationship']/..//select/option"));
        this.lastName = protractor_1.element(protractor_1.by.xpath("//label[.='Last Name']/..//hear2-input-controls/input"));
        this.firstName = protractor_1.element(protractor_1.by.xpath("//label[.='First Name']/..//hear2-input-controls/input"));
        this.middleName = protractor_1.element(protractor_1.by.xpath("//label[.='Middle Initial']/..//hear2-input-controls/input"));
        this.ssn = protractor_1.element(protractor_1.by.xpath("//label[.='SSN']/..//input"));
        this.calender = protractor_1.element(protractor_1.by.xpath("//div[@class='calender-box']/input"));
        this.year = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-year']/option"));
        this.month = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-month']/option"));
        this.date = protractor_1.element.all(protractor_1.by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"));
        this.genderFemale = protractor_1.element(protractor_1.by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
        this.genderMale = protractor_1.element(protractor_1.by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
        this.nextButton = protractor_1.element(protractor_1.by.xpath("//span[.='Next:']"));
        this.cobCheckbox = protractor_1.element(protractor_1.by.xpath("//h3[.='COB']"));
        this.benifitStartDate = protractor_1.element(protractor_1.by.xpath("//label[.='Benefit Start Date']/..//div/input"));
        this.benifitEndDate = protractor_1.element(protractor_1.by.xpath("//label[.='Benefit End Date']/..//div/input"));
        this.venderCode = protractor_1.element(protractor_1.by.xpath("//label[.='Vendor Code']"));
        this.venderSubscriberCode = protractor_1.element(protractor_1.by.xpath("//label[.='Vendor Subscriber Code']"));
        this.planDetails = protractor_1.element(protractor_1.by.xpath("//label[.='Plan Details']"));
        this.medicareCheckbox = protractor_1.element(protractor_1.by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
        this.medicarePartADate = protractor_1.element(protractor_1.by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
        this.medicarePartBDate = protractor_1.element(protractor_1.by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
        this.medicarePlan = protractor_1.element(protractor_1.by.xpath("//label[.='Medicare Plan #']"));
        this.overrideDate = protractor_1.element(protractor_1.by.xpath("//label[.='Override Date']/..//div/input"));
        this.saveAndAddAnotherDepenedent = protractor_1.element(protractor_1.by.xpath("//button[.='Save and add another dependent']"));
        this.subscriberAddress = protractor_1.element(protractor_1.by.xpath("//h3[.='Same as subscriber address']"));
        this.subscriberContact = protractor_1.element(protractor_1.by.xpath("//h3[.='Same as subscriber contact']"));
    }
}
exports.AddDependent_Repository = AddDependent_Repository;
