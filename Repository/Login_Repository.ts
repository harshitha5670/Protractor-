import {element, by} from "protractor"

export class Login_Repository {

    public emailAddress =  element(by.id('i0116'));
    public password =  element(by.name('passwd'));
    public nextButton  =  element(by.xpath("//input[@class='btn btn-block btn-primary']"));
    public yes = element(by.id('idSIButton9'));
   


}
