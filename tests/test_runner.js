var util = require('util');
var testrunner = require('qunit');

// change any option for all tests globally
testrunner.options.log = {
  // log assertions overview
  assertions : false,
  // log expected and actual values for failed tests
  errors : true,
  // log tests overview
  tests : true,
  // log summary
  summary : true,
  // log global summary (all files)
  globalSummary : false,
  // log currently testing code file
  testing : false
};

var callback = function (err, report) {
  util.log('Test done!');
  if (err) {
    util.log(util.inspect(err));
  } else {
    util.log(util.inspect(report));
  }
};

// one code and tests file
testrunner.run({
  code : 'lib/main.js',
  tests : [
    'tests/payments_test.js',
    'tests/preauthorizations_test.js',
    'tests/transactions_test.js',
    'tests/clients_test.js',
    'tests/offers_test.js',
    'tests/subscriptions_test.js',
    'tests/webhooks_test.js',
    'tests/refunds_test.js'
  ]
}, callback);
