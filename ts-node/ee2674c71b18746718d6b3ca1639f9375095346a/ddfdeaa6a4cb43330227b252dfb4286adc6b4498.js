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
    BlogRollE2E.prototype.clickOnEditButton = function () {
        globals_1.element(globals_1.by.css('a.edit-blog-entry')).click();
    };
    return BlogRollE2E;
}());
exports.BlogRollE2E = BlogRollE2E;
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/ee2674c71b18746718d6b3ca1639f9375095346a/ddfdeaa6a4cb43330227b252dfb4286adc6b4498.js.map