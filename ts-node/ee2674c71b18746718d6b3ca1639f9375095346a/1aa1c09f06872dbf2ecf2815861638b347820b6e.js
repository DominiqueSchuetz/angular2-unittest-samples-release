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
    it('should getItBoth', function () {
        page.getItBoth().then(function (res) {
            expect(res).toEqual('Edit Blog Entry');
        });
    });
    it('should set new title', function () {
        page.setBlogTitle();
    });
});
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/ee2674c71b18746718d6b3ca1639f9375095346a/1aa1c09f06872dbf2ecf2815861638b347820b6e.js.map