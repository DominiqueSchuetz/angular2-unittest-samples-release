import { browser, element, by } from 'protractor/globals';


export class BlogRollE2E {

    navigateToRoot() {
        return browser.get('/');
    }

    getTheTableFromTemplate() {
        return element(by.css('.table')).isPresent();
    }

    isButtonClassThere() {
        return element(by.css('#new-blog-entry')).isPresent();

    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    getTheRightPopUpText() {
        return element(by.css('.ui-confirmdialog-message')).getText();

    }

    getItBoth() {
        return browser.driver.wait(() => {
            return element(by.css('a.edit-blog-entry')).click().then(() => {
                browser.sleep(4000);
                return element(by.css('#blog-editor-panel h2')).getText();
            });
        });
    }

    //    static clickOnEditButton() {
    //         element(by.css('a.edit-blog-entry')).click();
    //     }

    setBlogTitle() {
        // BlogRollE2E.clickOnEditButton();
        element(by.xpath('//*/input[@ng-reflect-model="Blue Trane"]')).clear().then(() => {
            element(by.xpath('//*/input[@ng-reflect-model="Blue Trane"]')).sendKeys('Green Trane');
        });
        browser.sleep(2000);
    }

    pressSaveButton() {
        
    }
}