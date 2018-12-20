import { ElementFinder, browser, by, protractor, ElementArrayFinder } from "protractor"
import { Select } from "../Methods/Select"


 
export class Common {

    public selectByVisibleText(element: ElementArrayFinder, visibleText: string) {
        element.each(function (item) {
            item.getAttribute('text').then(function (text) {
                if (text == visibleText) {
                    item.click()
                }
            })
        })
    }
    public selectByValue(element: ElementArrayFinder, value: string) {
        element.each(function (item) {
            item.getCssValue(value).then(function (text) {
                if (text == value) {
                    item.click()
                }
            })
        })
    }
    public selectByIndex(element: ElementArrayFinder, index: number) {
        element.then(function (options) {
            options[index].click()
        })
    }  
    public action(element: ElementFinder, text: string, milisecond: number) {
        element.sendKeys(text)
        browser.sleep(milisecond)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.sleep(milisecond)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    }

    public actions(element: ElementFinder, text: string) {
        browser.actions().click(element).sendKeys(text).
        keyDown(protractor.Key.SHIFT).sendKeys(protractor.Key.ENTER).perform()
    }

    public switchTOframe(element: ElementFinder) {
        browser.switchTo().frame(element.getWebElement())
        //browser.switchToParentFrame() method used to swich from child frame to parent frame
        //broser.switchTo().defaultContent() method exits the control from all the iframes
    }

    public isPresent(element: ElementFinder, _action) {
        if (element.isPresent()) {
            element.action
        }
        else {
            console.log("the element does not exits")
        }
    }

    public verifyText(element: ElementFinder, expectedText: string) {
        element.getText().then(function (actualText) {
            expect(element.getText()).toContain(expectedText)
            if (actualText === expectedText) {
                console.log("actual text is equal to expected text")
            }
            else {
                console.log("actual text is not equal to expected text")
            }  
        })
    }

    public verifyTitle(expectedTitle: string) {
        browser.getTitle().then(function (actualTitle) {
            expect(browser.getTitle()).toContain(expectedTitle)
            if (actualTitle === expectedTitle) {
                console.log("acutalTitle is equal to expected title")
            }
            else {
                console.log("actual title is not equal to expected title")
            }
        })
    }

    public verifyUrl(expectedUrl: string) {
        browser.getCurrentUrl().then(function (actualUrl) {
            expect(browser.getCurrentUrl()).toContain(expectedUrl)
            if (actualUrl === expectedUrl) {
                console.log("actual url is equal to expected url")
            }
            else {
                console.log('actual url is not equal to expected url')
            }

        })
    }

    public getAttribute(element: ElementFinder, attribute: string) {
        element.getAttribute(attribute).then(function (attribute) {
            console.log(attribute)
        })
    }

    // public mouseHover(element: ElementFinder, text: string) {
    //     if (element.sendKeys()) {
    //         browser.actions().mouseMove(element.sendKeys(text)).perform()
    //     }
    //     if (element.click()) {
    //         browser.actions().mouseMove(element.click()).perform()
    //     }
    // }


    
}