import {element,by} from "protractor"
export class ContactDetails_Repository  {

    public static accountManager = element(by.xpath("//label[.='Account Manager']/..//div/input"))
    public static benefitTechnicianIII = element(by.xpath("//label[.='Employee Benefit Technician III']/..//div/input"))
    public static benefitTechnicianI = element(by.xpath("//label[.='Employee Benefit Technician I']/..//div/input"))
    public static clientButton = element(by.xpath("//button[.='Client']"))
    public static consultant = element(by.xpath("//button[.='Consultant']"))
    public static consultant_name = element(by.xpath("//label[.='Consultant Name']/..//div/input"))
    public static consultant_firm = element(by.xpath("//label[.='Consultant Firm']/..//div/input"))
    public static submitButton = element(by.xpath("//button[.='Submit']"))


}
