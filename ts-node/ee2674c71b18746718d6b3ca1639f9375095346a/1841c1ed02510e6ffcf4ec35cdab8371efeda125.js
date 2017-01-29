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
    it('should have a table on the page', function () {
        expect(page.getTheTableFromTemplate()).toBe(true);
    });
});
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/ee2674c71b18746718d6b3ca1639f9375095346a/1841c1ed02510e6ffcf4ec35cdab8371efeda125.js.map