"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const locators = {
    byText: (text) => protractor_1.by.xpath(text)
};
class Select2 {
    constructor(container) {
        this.container = container;
    }
    findChild(locator) {
        return this.container.element(locator);
    }
    selectByText(text) {
        this.findChild(locators.byText(text)).click();
    }
}
exports.Select2 = Select2;
