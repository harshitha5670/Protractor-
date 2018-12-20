import {element , by} from "protractor"

export class AddProduct_Repository {

public enrollementType = element.all(by.xpath("//label[.='Enrollment Type :']/..//select/option"));
public bargainingUnit = element.all(by.xpath("//label[.='Bargaining Unit :']/..//select/option")); 
public selectMedicalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='medical-plan-body']//input[@type = 'checkbox']/../..//label/span")); //tr[@class='medical-plan-body']//td//label/span
public selectDentalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='dental-plan-body']//input[@type = 'checkbox']/../..//label/span"));
public selectVisionPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='vision-plan-body']//input[@type = 'checkbox']/../..//label/span"));
public selectLifePlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='life-plan-body']//td//label/span"));
public enrollVoluntaryPlan = element(by.xpath("//button[.='Enroll for Voluntary Term Life Insurance']"));
public coverageAmount = element(by.xpath("//div[.='Coverage Amount']/..//input"));
public submitButton = element(by.xpath("//button[.='Submit']"));
public calender = element(by.xpath("//div[@class='calender-box']/input"))
public year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
public month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
public date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
public enrollChild = element(by.xpath("//label[@class='custom-control custom-checkbox']/..//span")) 



}

