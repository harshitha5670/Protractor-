import { element, by } from "protractor";

export class SubscriberView_Repository {

    public static personalDetailsTab = element(by.xpath("//label[.='Personal Details']"))
    public static productsDetailsTab = element(by.xpath("//label[.='Product']"))
    public static historyTab = element(by.xpath("//label[.='History']"))
    public static getHistoryButton = element(by.xpath("//button[.='Get History']"))
    public static billingTab = element(by.xpath("//label[.='Billing']"))
    public static getBillingButton = element(by.xpath("//button[.='Get Bill Details']"))
    public static subscriberName = element(by.xpath("//div[@class='row card-block']/../..//div/h1"))
    public static subscriberSsn = element(by.xpath("//span[@class='s-ssn'][1]"))
    public static adjustPriorPlansButton = element(by.xpath("//span[.='Adjust prior plans']"))
    public static editAllButton = element(by.xpath("//div[@class='form-group edit-term-btn col-md-5']//button[1]"))
    public static terminateAllButton = element(by.xpath("//div[@class='form-group edit-term-btn col-md-5']//button[2]"))
    public static viewAllElegiblePlansLink = element(by.xpath("//a[.='View all eligible plans']"))
    public static hideAllElegiblePlansLink = element(by.xpath("//a[.='Hide all eligible plans']"))
    public static terminateButton = element.all(by.xpath("//button[.='Terminate']"))
    public static editButton = element.all(by.xpath("//div[@class='edit-plan-button']/..//img"))
    public static updateButton = element(by.xpath("//button[.='Update']"))
    public static dependentList = element.all(by.xpath("//div[@class='row list-group dependent-list']"))
    public static addMoreDependents = element(by.xpath("//span[.='Add more dependents']"))
    public static saveButton = element(by.xpath("//button[.='Save']"))
    public static closeButton = element(by.xpath("//button[.='Close']"))
    public static popUpTerminateButton = element(by.xpath("//button[.='Close']/..//button[.='Terminate']"))
    public static notesTab = element(by.xpath("//label[@aria-controls='panel3']"))
    public static notesTextarea = element(by.xpath("////label[@aria-controls='panel3']/..//textarea"))
    public static addButton = element(by.xpath("//button[.='Add']"))
    public static notesIndicator = element(by.xpath("//label[@aria-controls='panel3']//img"))
   
}
