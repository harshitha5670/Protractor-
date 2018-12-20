import {element,by} from "protractor"
export class Home_Repository {

    public search = element(by.xpath("//div[@class='input-group search-bar-box']//input"));
    public addSubscriber = element(by.xpath("//div[@class='redirect-img-addSubs']"));
    public addClient = element(by.xpath("//div[@class='redirect-img-client']"));
    public addViewPpayment = element(by.xpath("//div[@class='redirect-img-payments']"));
    public otherAdjustement = element(by.xpath("//div[@class='redirect-img-adj']"));
    public uploadSheets = element(by.xpath("//div[@class='redirect-img-upload']"));
    public account = element(by.xpath("//div[@class='user-profile-box']/img"));
    public logout = element(by.xpath("//span[.='Logout']"));
    public hear2 = element(by.xpath("//div[@class='col-md-2']/img"));


}
