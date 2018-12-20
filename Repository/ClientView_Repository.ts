import {element, by} from "protractor" 
export class ClientView_Repository {

    public static clientInformationLink = element(by.xpath("//a[.='Client Information']"))
    public static contactDetailsLink = element(by.xpath("//a[.='Contact details']"))
    public static editButton = element(by.xpath("//button[.='Edit']"))
    public static terminateButton = element(by.xpath("//button[.='Terminate']"))
    public static dateJoining = element(by.xpath("//label[.='Date Joined']/..//div"))
    public static clientId = element(by.xpath("//label[.='Client ID']/..//div"))
    public static clientName = element(by.xpath("//label[.='Client Name']/..//div"))
   
}
