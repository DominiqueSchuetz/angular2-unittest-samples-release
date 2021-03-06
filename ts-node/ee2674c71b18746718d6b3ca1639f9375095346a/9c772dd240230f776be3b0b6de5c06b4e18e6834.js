"use strict";
var blog_roll_po_1 = require('../pageObjects/blog-roll.po');
describe('angular2-unittest-samples-release App', function () {
    var page;
    beforeEach(function () {
        page = new blog_roll_po_1.BlogRollE2E();
    });
    it('should display message saying app works', function () {
        page.navigateToRoot();
        expect(page.getParagraphText()).toEqual('Simple Task Manager');
    });
    it('should have a tableclass on the page', function () {
        expect(page.getTheTableFromTemplate()).toBe(true);
    });
    it('should have a buttonclass on the page', function () {
        expect(page.isButtonClassThere()).toBe(true);
    });
    it('should click on Button', function () {
        expect(page.clickOnEditButton());
    });
    it('should have lable class', function (res) {
        page.getTheEditBlogEntry().then(function (res) {
            expect(res).toEqual('Edit Blog Entry');
        });
    });
});
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/ee2674c71b18746718d6b3ca1639f9375095346a/9c772dd240230f776be3b0b6de5c06b4e18e6834.js.map