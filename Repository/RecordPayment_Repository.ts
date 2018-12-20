import { element, by } from "protractor";

export class RecordPayment_Repository {

    public static fileCategoryJE = element(by.xpath("//button[.='JE']"))
    public static fileCategoryTF = element(by.xpath("//button[.='TF']"))
    public static referenceNumber = element(by.xpath("//label[.='Reference number:']/..//input"))
    public static calender = element(by.xpath("//div[@class='calender-box']/input"))
    public static year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    public static month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    public static date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
    public static insurerProductID = element.all(by.xpath("//label[.='Insurer product ID']/..//select/option"))
    public static directBill = element.all(by.xpath("//label[.='Direct bill:']/..//select/option"))
    public static clientName = element(by.xpath("//label[.='Client id & name ']/..//div/input"))
    public static clientBalance = element(by.xpath("//label[.='Client balance']/..//div"))
    public static glAccount = element(by.xpath("//label[.='G/L account']/../..//select/option"))
    public static checkNumber = element(by.xpath("//label[.='Check #']/../..//input"))
    public static checkAmount = element(by.xpath("//label[.='Check amount']/../..//input"))
    public static description = element(by.xpath("//label[.='Description (optional)']/..//input"))
    public static addButton = element(by.xpath("//button[.='Add']"))
    public static submitButton = element(by.xpath("//button[.='Submit']"))
    public static approveButton = element(by.xpath("//button[.='Approve']"))
    public static resetButton = element(by.xpath("//button[.='Approve']"))
    public static checkDate = element(by.xpath("//label[.='Check date:']/..//div"))
    public static validateCheckNum = element(by.xpath("//div[@class='grid-tooltip reason-code-ellipses truncate-checknum{']"))

}