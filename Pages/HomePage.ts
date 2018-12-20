import { Home_Repository } from "../Repository/Home_Repository"
import { Common } from "../Utils/Methods/Common"
let home = new Home_Repository()
let common = new Common()

export class HomePage {

    public searchTextBox(keys: string) {
        common.action(home.search,keys,4000)
    }

    public clickOnAddSubscriber() {
        home.addSubscriber.click()
    }

    public clickOnAddClient() {
        home.addClient.click()
    }

    public clickOnAddViewPayments() {
        home.addViewPpayment.click()
    }

    public clickOnOtherAdjustment() {
        home.otherAdjustement.click()
    }

    public clickOnAccount() {
        home.account.click()

    }

    public clickOnLogout() {
        home.logout.click()
    }

    public clickOnHear2() {
        home.hear2.click()
    }

}