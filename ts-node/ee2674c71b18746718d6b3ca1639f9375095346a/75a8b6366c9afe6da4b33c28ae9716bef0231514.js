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
});
//# sourceMappingURL=/Users/dominique/Documents/Software_Dev/WebDevelopment/AngularJS/angularUnitTest3/ts-node/ee2674c71b18746718d6b3ca1639f9375095346a/75a8b6366c9afe6da4b33c28ae9716bef0231514.js.map