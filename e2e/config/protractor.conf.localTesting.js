// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js


// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
// var reporter = new HtmlScreenshotReporter({
//     dest: 'e2e/screenshots',
//     cleanDestination: true,
//     showSummary: true,
//     showConfiguration: true,
//     captureOnlyFailedSpecs: true,
//     filename: 'Fehlerreport.html'
// });


var SpecReporter = require('jasmine-spec-reporter');

exports.config = {

     //Assign the test reporter to each running instance
    onPrepare: function () {
        jasmine.getEnv().addReporter(SpecReporter);
    },

    allScriptsTimeout: 11000,
    specs: [
        '../specs/*.e2e-spec.ts'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    useAllAngular2AppRoots: true,
    beforeLaunch: function () {
        require('ts-node').register({
            project: 'e2e'
        });
    },
    useAllAngular2AppRoots: true,
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
    }
};
