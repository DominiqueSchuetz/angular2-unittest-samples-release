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
    xit('should click on Button', function () {
        expect(page.clickOnEditButton());
    });
    xit('should have lable class', function (res) {
        page.getTheEditBlogEntry().then(function (res) {
            expect(res).toEqual('Edit Blog Entry');
        });
    });
    it('should have lable class', function () {
        expect(page.getTheEditBlogEntry()).toEqual('Edit Blog Entr');
    });
});
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/ee2674c71b18746718d6b3ca1639f9375095346a/7e802355143d8d5601cba290389b4fde679b2d8e.js.map