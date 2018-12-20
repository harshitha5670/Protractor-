"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Home_Repository_1 = require("../Repository/Home_Repository");
const Common_1 = require("../Utils/Methods/Common");
let home = new Home_Repository_1.Home_Repository();
let common = new Common_1.Common();
class HomePage {
    searchTextBox(keys) {
        common.action(home.search, keys, 4000);
    }
    clickOnAddSubscriber() {
        home.addSubscriber.click();
    }
    clickOnAddClient() {
        home.addClient.click();
    }
    clickOnAddViewPayments() {
        home.addViewPpayment.click();
    }
    clickOnOtherAdjustment() {
        home.otherAdjustement.click();
    }
    clickOnAccount() {
        home.account.click();
    }
    clickOnLogout() {
        home.logout.click();
    }
    clickOnHear2() {
        home.hear2.click();
    }
}
exports.HomePage = HomePage;
