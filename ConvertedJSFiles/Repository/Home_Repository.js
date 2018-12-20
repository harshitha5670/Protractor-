"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Home_Repository {
    constructor() {
        this.search = protractor_1.element(protractor_1.by.xpath("//div[@class='input-group search-bar-box']//input"));
        this.addSubscriber = protractor_1.element(protractor_1.by.xpath("//div[@class='redirect-img-addSubs']"));
        this.addClient = protractor_1.element(protractor_1.by.xpath("//div[@class='redirect-img-client']"));
        this.addViewPpayment = protractor_1.element(protractor_1.by.xpath("//div[@class='redirect-img-payments']"));
        this.otherAdjustement = protractor_1.element(protractor_1.by.xpath("//div[@class='redirect-img-adj']"));
        this.uploadSheets = protractor_1.element(protractor_1.by.xpath("//div[@class='redirect-img-upload']"));
        this.account = protractor_1.element(protractor_1.by.xpath("//div[@class='user-profile-box']/img"));
        this.logout = protractor_1.element(protractor_1.by.xpath("//span[.='Logout']"));
        this.hear2 = protractor_1.element(protractor_1.by.xpath("//div[@class='col-md-2']/img"));
    }
}
exports.Home_Repository = Home_Repository;
