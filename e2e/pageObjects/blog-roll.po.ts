import { browser, element, by, protractor, } from 'protractor/globals';


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
            return element.all(by.css('a.edit-blog-entry')).get(0).click().then(() => {
                browser.sleep(4000);
                return element(by.css('#blog-editor-panel h2')).getText();
            });
        });
    }

    //    static clickOnEditButton() {
    //         element(by.css('a.edit-blog-entry')).click();
    //     }

    setNewBlogTitle() {
        // BlogRollE2E.clickOnEditButton();
        element(by.xpath('//*/input[@ng-reflect-model]')).clear().then(() => {
            element(by.xpath('//*/input[@ng-reflect-model]')).sendKeys('Green Trane');
        });
        browser.sleep(2000);
    }

    pressSaveButton() {
        return browser.driver.wait(() => {
            return element(by.buttonText('Save')).click().then(() => {
                browser.sleep(4000);
                return element.all(by.css('span.title')).get(0).getText();
            });
        });
    }

    deleteABlogEntry() {
        element.all(by.css('a.delete-blog-entry')).get(2).click().then(() => {
            browser.sleep(1000);
            browser.driver.switchTo().alert().dismiss();
        });
    }

    getTheNumberOfTabelRows() {
        return element.all(by.css('tr.rows')).count();
    }
}