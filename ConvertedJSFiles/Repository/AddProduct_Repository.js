"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AddProduct_Repository {
    constructor() {
        this.enrollementType = protractor_1.element.all(protractor_1.by.xpath("//label[.='Enrollment Type :']/..//select/option"));
        this.bargainingUnit = protractor_1.element.all(protractor_1.by.xpath("//label[.='Bargaining Unit :']/..//select/option"));
        this.selectMedicalPlan = protractor_1.element.all(protractor_1.by.xpath("//tr[@ng-reflect-ng-class='medical-plan-body']//input[@type = 'checkbox']/../..//label/span")); //tr[@class='medical-plan-body']//td//label/span
        this.selectDentalPlan = protractor_1.element.all(protractor_1.by.xpath("//tr[@ng-reflect-ng-class='dental-plan-body']//input[@type = 'checkbox']/../..//label/span"));
        this.selectVisionPlan = protractor_1.element.all(protractor_1.by.xpath("//tr[@ng-reflect-ng-class='vision-plan-body']//input[@type = 'checkbox']/../..//label/span"));
        this.selectLifePlan = protractor_1.element.all(protractor_1.by.xpath("//tr[@ng-reflect-ng-class='life-plan-body']//td//label/span"));
        this.enrollVoluntaryPlan = protractor_1.element(protractor_1.by.xpath("//button[.='Enroll for Voluntary Term Life Insurance']"));
        this.coverageAmount = protractor_1.element(protractor_1.by.xpath("//div[.='Coverage Amount']/..//input"));
        this.submitButton = protractor_1.element(protractor_1.by.xpath("//button[.='Submit']"));
        this.calender = protractor_1.element(protractor_1.by.xpath("//div[@class='calender-box']/input"));
        this.year = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-year']/option"));
        this.month = protractor_1.element.all(protractor_1.by.xpath("//select[@class='ui-datepicker-month']/option"));
        this.date = protractor_1.element.all(protractor_1.by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"));
        this.enrollChild = protractor_1.element(protractor_1.by.xpath("//label[@class='custom-control custom-checkbox']/..//span"));
    }
}
exports.AddProduct_Repository = AddProduct_Repository;
