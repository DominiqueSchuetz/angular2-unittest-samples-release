"use strict";
var globals_1 = require('protractor/globals');
var Angular2UnittestSamplesReleasePage = (function () {
    function Angular2UnittestSamplesReleasePage() {
    }
    Angular2UnittestSamplesReleasePage.prototype.navigateTo = function () {
        return globals_1.browser.get('/');
    };
    Angular2UnittestSamplesReleasePage.prototype.getParagraphText = function () {
        return globals_1.element(globals_1.by.css('app-root h1')).getText();
    };
    return Angular2UnittestSamplesReleasePage;
}());
exports.Angular2UnittestSamplesReleasePage = Angular2UnittestSamplesReleasePage;
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/fa044e516afd8a8e9d9d9f47e3b32b8cb62db7ef/a23a55f67c7648f22b4f57825a4dd85887588d13.js.map