//var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
      },
 
    //jrunner.projectBaseDir = '';
    //jrunner.execute(['**/*_spec.js']);

      // multiCapabilities: [{
      //   'browserName': 'chrome'
      // }, {
      //   'browserName': 'firefox'
      // }],
      framework: 'jasmine',  
    specs: ['D:\\typescript\\E2Etesting\\ConvertedJSFiles\\Tests\\AddSubscriberValidation.js'],
    //   onPrepare : function() {       
    //     jasmine.getEnv().addReporter(new HtmlReporter({
    //       ignoreSkippedSpecs: true,
    //       baseDirectory : '../Reports'
    //     }).getJasmine2Reporter());
    //   },
      
    //   suites: {
    //     AddSubscriber: 'AddSubscriber_Validation.js',
    //     AddClient: 'AddClient_Validation.js',
    //     AddViewpayments: 'AddViewPayments_Validation.js',
    //     OtherAdjustments: 'OtherAdjustment_Validation.js',
    //     all: '*_Validation.js'
    //   },   

      jasmineNodeOpts: {
        defaultTimeoutInterval: 300000
      },
      allScriptsInterval: 300000,
      getPageInterval: 15000
    };
    