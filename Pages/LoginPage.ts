import {Login_Repository} from "../Repository/Login_Repository"
import { browser } from "protractor";
let login = new Login_Repository()

export class LoginPage {

    enterEmailAddress(emailId : string) {
        login.emailAddress.sendKeys(emailId)
        browser.sleep(3000)
    }

    enterPassword(passwrd: string) {
        login.password.sendKeys(passwrd)
        browser.sleep(3000)
    }

    clickOnNextButton() {
        login.nextButton.click()
        browser.sleep(3000)

    }

    handleSignUp () {
        try {
            login.yes.click()
        } catch (error) {
            return error
        }
    }
   

}
