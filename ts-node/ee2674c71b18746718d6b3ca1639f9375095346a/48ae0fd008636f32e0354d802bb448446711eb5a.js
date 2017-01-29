"use strict";
var globals_1 = require('protractor/globals');
var BlogRollE2E = (function () {
    function BlogRollE2E() {
    }
    BlogRollE2E.prototype.navigateToRoot = function () {
        return globals_1.browser.get('/');
    };
    BlogRollE2E.prototype.getTheTableFromTemplate = function () {
        return globals_1.element(globals_1.by.css('.table')).isPresent();
    };
    BlogRollE2E.prototype.isButtonClassThere = function () {
        return globals_1.element(globals_1.by.css('#new-blog-entry')).isPresent();
    };
    BlogRollE2E.prototype.getParagraphText = function () {
        return globals_1.element(globals_1.by.css('app-root h1')).getText();
    };
    BlogRollE2E.prototype.getTheRightPopUpText = function () {
        return globals_1.element(globals_1.by.css('.ui-confirmdialog-message')).getText();
    };
    BlogRollE2E.prototype.getItBoth = function () {
        return globals_1.browser.driver.wait(function () {
            return globals_1.element(globals_1.by.css('a.edit-blog-entry')).click().then(function () {
                globals_1.browser.sleep(4000);
                return globals_1.element(globals_1.by.css('#blog-editor-panel h2')).getText();
            });
        });
    };
    //    static clickOnEditButton() {
    //         element(by.css('a.edit-blog-entry')).click();
    //     }
    BlogRollE2E.prototype.setBlogTitle = function () {
        globals_1.browser.sleep(2000);
        // BlogRollE2E.clickOnEditButton();
        globals_1.element(globals_1.by.xpath('//*/input[@ng-reflect-model="Blue Trane"]')).sendKeys('Green Trane');
        globals_1.browser.sleep(2000);
    };
    return BlogRollE2E;
}());
exports.BlogRollE2E = BlogRollE2E;
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/ee2674c71b18746718d6b3ca1639f9375095346a/48ae0fd008636f32e0354d802bb448446711eb5a.js.map