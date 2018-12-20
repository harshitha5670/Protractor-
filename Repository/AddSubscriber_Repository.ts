import { element, by} from "protractor"
export class AddSubscriber_Repository { 

    public lastName =  element(by.xpath("//label[.='Last Name']/..//hear2-input-controls/input"));
    public firstName =    element(by.xpath("//label[.='First Name']/..//hear2-input-controls/input"));
    public middleName =  element(by.xpath("//label[.='Middle Initial']/..//hear2-input-controls/input"));
    public ssn =  element(by.xpath("//label[.='SSN']/..//input"));
    public clientID =  element(by.xpath("//label[.='Client ']/../..//div//div//div//div/input"));
    public calender = element(by.xpath("//div[@class='calender-box']/input"))
    public year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    public month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    public date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
    public genderFemale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
    public genderMale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
    public addressLine1 =  element(by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"));
    public addressLine2 = element(by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"));
    public zipCode =  element(by.xpath("//label[.='Zipcode']/..//input"));
    public city = element(by.xpath("//label[.='City']"));
    public state = element(by.xpath("//label[.='State']"));
    public mobileNumber =   element(by.xpath("//label[.='Mobile']/..//input"));
    public homeNumber =   element(by.xpath("//label[.='Home']/..//input"));
    public workNumber =   element(by.xpath("//label[.='Work']/..//input"));
    public email =   element(by.xpath("//label[.='Email']/..//input"));
    public nextButton = element(by.xpath("//span[.='Next:']"));
    public cobCheckbox = element(by.xpath("//h3[.='COB']/../..//span"));
    public benifitStartDate = element(by.xpath("//label[.='Benefit Start Date']/..//div/input"));
    public benifitEndDate = element(by.xpath("//label[.='Benefit End Date']/..//div/input"));
    public venderCode = element(by.xpath("//label[.='Vendor Code']"));
    public venderSubscriberCode = element(by.xpath("//label[.='Vendor Subscriber Code']"));
    public planDetails = element(by.xpath("//label[.='Plan Details']"));
    public medicareCheckbox = element(by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
    public medicarePartADate = element(by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
    public medicarePartBDate = element(by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
    public medicareOverrideDate = element(by.xpath("//label[.='Override Date']/..//div/input"))
    public medicarePlan = element(by.xpath("//label[.='Medicare Plan #']"));
    public overrideDate = element(by.xpath("//button[.='Cancel']"));
    public addProductLink = element(by.xpath("//a[.='Go to Add Products']"));



}
