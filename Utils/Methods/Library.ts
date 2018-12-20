import { element, by, protractor, browser } from "protractor"
import { Common } from "../Methods/Common"
import { JsonReader } from "../Methods/JsonReader"
import { LoginPage } from "../../Pages/LoginPage"
let common = new Common()
let read = new JsonReader()
let login = new LoginPage()


export class Library {

     public static calender = element(by.xpath("//div[@class='calender-box']/input"))
     public static year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
     public static month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
     public static date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))

    public clickOnCalenderBox() {
        Library.calender.click()
    }
    public selectYear(year: number) {
        common.selectByIndex(Library.year, year)
    }
    public selectMonth(month: number) {
        common.selectByIndex(Library.month, month)
    }
    public selectDate(date: string) {
        common.selectByVisibleText(Library.date,date)
    }

    public loginToWebsite(environment: string, email: string, password: string) {
        browser.waitForAngularEnabled(false)
        browser.get(read.readData("D:\\typescript\\E2Etesting\\Utils\\Constants\\baseUrl.json", environment))
        login.enterEmailAddress(read.readData("D:\\typescript\\E2Etesting\\Utils\\Constants\\loginCradentials.json", email))
        login.clickOnNextButton()
        login.enterPassword(read.readData("D:\\typescript\\E2Etesting\\Utils\\Constants\\loginCradentials.json", password ))
        login.clickOnNextButton()
        login.handleSignUp()

    }
}