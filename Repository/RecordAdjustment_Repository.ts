import { element, by } from "protractor";

export class RecordAdjustement_Repository  {

    public static insurerProductID = element.all(by.xpath("//label[.='Insurer product ID']/..//select/option"))
    public static directBill = element.all(by.xpath("//label[.='Direct bill:']/..//select/option"))
    public static clientId = element(by.xpath("//label[.='Client id & name ']/..//div/input"))
    public static adjustmentAmount = element(by.xpath("//label[.='Adjustment amount']/..//input"))
    public static description = element(by.xpath("//label[.='Description (optional)']/..//input"))
    public static count = element(by.xpath("//label[.='Count (optional)']/..//input"))
    public static addButton = element(by.xpath("//button[.='Add']"))
    public static submitButton = element(by.xpath("//button[.='Submit']"))
    public static approveButton = element(by.xpath("//button[.='Approve']"))
    public static resetButton = element(by.xpath("//button[.='Reset']"))
    public static productCode = element.all(by.xpath("//label[.='Product code']/..//select/option"))
    public static group = element.all(by.xpath("//label[.='Group']/..//select/option"))
    public static department = element.all(by.xpath("//label[.='Department']/..//select/option"))
    public static calender = element(by.xpath("//div[@class='calender-box']/input"))
    public static year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
    public static month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
    public static date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))


}
