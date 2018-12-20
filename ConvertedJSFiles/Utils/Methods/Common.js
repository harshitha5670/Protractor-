"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class Common {
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
    action(element, text, milisecond) {
        element.sendKeys(text);
        protractor_1.browser.sleep(milisecond);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ARROW_DOWN).perform();
        protractor_1.browser.sleep(milisecond);
        protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
    }
    actions(element, text) {
        protractor_1.browser.actions().click(element).sendKeys(text).
            keyDown(protractor_1.protractor.Key.SHIFT).sendKeys(protractor_1.protractor.Key.ENTER).perform();
    }
    switchTOframe(element) {
        protractor_1.browser.switchTo().frame(element.getWebElement());
        //browser.switchToParentFrame() method used to swich from child frame to parent frame
        //broser.switchTo().defaultContent() method exits the control from all the iframes
    }
    isPresent(element, _action) {
        if (element.isPresent()) {
            element.action;
        }
        else {
            console.log("the element does not exits");
        }
    }
    verifyText(element, expectedText) {
        element.getText().then(function (actualText) {
            expect(element.getText()).toContain(expectedText);
            if (actualText === expectedText) {
                console.log("actual text is equal to expected text");
            }
            else {
                console.log("actual text is not equal to expected text");
            }
        });
    }
    verifyTitle(expectedTitle) {
        protractor_1.browser.getTitle().then(function (actualTitle) {
            expect(protractor_1.browser.getTitle()).toContain(expectedTitle);
            if (actualTitle === expectedTitle) {
                console.log("acutalTitle is equal to expected title");
            }
            else {
                console.log("actual title is not equal to expected title");
            }
        });
    }
    verifyUrl(expectedUrl) {
        protractor_1.browser.getCurrentUrl().then(function (actualUrl) {
            expect(protractor_1.browser.getCurrentUrl()).toContain(expectedUrl);
            if (actualUrl === expectedUrl) {
                console.log("actual url is equal to expected url");
            }
            else {
                console.log('actual url is not equal to expected url');
            }
        });
    }
    getAttribute(element, attribute) {
        element.getAttribute(attribute).then(function (attribute) {
            console.log(attribute);
        });
    }
}
exports.Common = Common;
