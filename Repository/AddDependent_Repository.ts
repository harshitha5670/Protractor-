import {element , by } from "protractor" 

export class AddDependent_Repository {

    public relationshipDDL = element.all(by.xpath("//label[.='Relationship']/..//select/option"));
    public lastName =  element(by.xpath("//label[.='Last Name']/..//hear2-input-controls/input"));
    public firstName =    element(by.xpath("//label[.='First Name']/..//hear2-input-controls/input"));
    public middleName =  element(by.xpath("//label[.='Middle Initial']/..//hear2-input-controls/input"));
    public ssn =  element(by.xpath("//label[.='SSN']/..//input"));
    public calender = element(by.xpath("//div[@class='calender-box']/input"))
    public year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    public month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    public date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
    public genderFemale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
    public genderMale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
    public nextButton = element(by.xpath("//span[.='Next:']"));
    public cobCheckbox = element(by.xpath("//h3[.='COB']"));
    public benifitStartDate = element(by.xpath("//label[.='Benefit Start Date']/..//div/input"));
    public benifitEndDate = element(by.xpath("//label[.='Benefit End Date']/..//div/input"));
    public venderCode = element(by.xpath("//label[.='Vendor Code']"));
    public venderSubscriberCode = element(by.xpath("//label[.='Vendor Subscriber Code']"));
    public planDetails = element(by.xpath("//label[.='Plan Details']"));
    public medicareCheckbox = element(by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
    public medicarePartADate = element(by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
    public medicarePartBDate = element(by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
    public medicarePlan = element(by.xpath("//label[.='Medicare Plan #']"));
    public overrideDate = element(by.xpath("//label[.='Override Date']/..//div/input"));
    public saveAndAddAnotherDepenedent = element(by.xpath("//button[.='Save and add another dependent']"));
    public subscriberAddress = element(by.xpath("//h3[.='Same as subscriber address']"))
    public subscriberContact = element(by.xpath("//h3[.='Same as subscriber contact']"))

}

