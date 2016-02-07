exports.config = {

  directConnect: true,

  specs: [
    'e2e/*.js'
  ],
  exclude: ['e2e/scenarios.js'],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  allScriptsTimeout: 11000,

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
  
};
