import { element, by } from "protractor";

export class ViewPayments_Repository {

    public static searchTextbox = element(by.xpath("//input[@class='   public static h-check-number ng-pristine ng-valid ng-touched']"))
    public static viewButton = element.all(by.xpath("//button[.='View']"))
    public static viewPayment = element(by.xpath("//a[.='View Payments']"))
    public static filter = element(by.xpath("//div/img[@class ='filter-icon' and contains (@src,'../../../assets/img/ico-filter.svg')]"))
    public static searchCheckNumber = element(by.xpath("//div[@class='col-md-3 no-right-padding']/input"))
    public static clientId = element(by.xpath("//div[@class='row col-md-12 ']//input"))
    public static insurerId = element.all(by.xpath("//div[@class='insurer-id-container']/select/option"))
    public static checkAmountRange = element.all(by.xpath("//div[@class='check-amount-container']/select/option"))
    public static checkAmount = element(by.xpath("//div[@class='check-amount-container']//input"))
    public static applyButton = element(by.xpath("//button[.='Apply']"))
    public static cancelButton = element(by.xpath("//button[.='Cancel']"))
    public static backButton = element(by.xpath("//button[.='Back']"))
    public static depositDate = element.all(by.xpath("//div[2]/table//tr/td[3]"))
    public static clientName = element.all(by.xpath("//div[@class='grid-tooltip reason-code-ellipses truncate-client']"))
    public static productId = element.all(by.xpath("//div[@class='row col-md-12']//table//tr/td[2]"))

}
module.exports = new ViewPayments_Repository;