import { browser, by, ElementArrayFinder, ElementFinder } from "protractor"

export class Select {

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
}