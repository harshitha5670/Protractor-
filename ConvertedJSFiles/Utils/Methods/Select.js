"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Select {
    selectByVisibleText(element, visibleText) {
        element.each(function (item) {
            item.getAttribute('text').then(function (text) {
                if (text == visibleText) {
                    item.click();
                }
            });
        });
    }
    selectByValue(element, value) {
        element.each(function (item) {
            item.getCssValue(value).then(function (text) {
                if (text == value) {
                    item.click();
                }
            });
        });
    }
    selectByIndex(element, index) {
        element.then(function (options) {
            options[index].click();
        });
    }
}
exports.Select = Select;
