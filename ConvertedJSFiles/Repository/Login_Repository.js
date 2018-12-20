"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Login_Repository {
    constructor() {
        this.emailAddress = protractor_1.element(protractor_1.by.id('i0116'));
        this.password = protractor_1.element(protractor_1.by.name('passwd'));
        this.nextButton = protractor_1.element(protractor_1.by.xpath("//input[@class='btn btn-block btn-primary']"));
        this.yes = protractor_1.element(protractor_1.by.id('idSIButton9'));
    }
}
exports.Login_Repository = Login_Repository;
