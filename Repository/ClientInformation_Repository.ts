import {element, by } from "protractor"
export class ClinetInformation_Repository {
 
    public static calender = element(by.xpath("//div[@class='calender-box']/input"))
    public static year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    public static month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    public static date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
    public static insurerID = element.all(by.xpath("//label[.='Insurer ID']/../..//select/option")) 
    public static clientID = element(by.xpath("//label[.='Client ID']/..//input"))
    public static clientName = element(by.xpath("//label[.='Client Name']/..//input"))
    public static country = element.all(by.xpath("//label[.='County']/..//select/option"))
    public static association = element.all(by.xpath("//label[.='Association']/..//select/option"))
    public static customerServiceLocation = element.all(by.xpath("//label[.='Customer Service Location']/..//select/option"))
    public static addressLine1 = element(by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"))
    public static addressLine2 = element(by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"))
    public static zipcode = element(by.xpath("//label[.='Zipcode']/..//input"))
    public static city = element(by.xpath("//label[.='City']"))
    public static state = element(by.xpath("//label[.='State']"))
    public static phoneNumber = element(by.xpath("//label[.='Phone']/..//input"))
    public static faxNumber = element(by.xpath("//label[.='Fax']/..//input"))
    public static setting_eRAAG = element(by.xpath("//div/hear2-client-info/div[2]/div[4]/div[1]/div[2]/label/span"))
    public static addClientContactsButton = element(by.xpath("//button[.='Next: Add client contacts']"))

}
