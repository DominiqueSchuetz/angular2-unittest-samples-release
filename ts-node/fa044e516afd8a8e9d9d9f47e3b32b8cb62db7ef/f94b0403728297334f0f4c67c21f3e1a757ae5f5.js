"use strict";
var app_po_1 = require('./app.po');
describe('angular2-unittest-samples-release App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.Angular2UnittestSamplesReleasePage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/fa044e516afd8a8e9d9d9f47e3b32b8cb62db7ef/f94b0403728297334f0f4c67c21f3e1a757ae5f5.js.map