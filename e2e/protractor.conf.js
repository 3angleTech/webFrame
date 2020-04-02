// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/**
 * @type { import('protractor').Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:4200/',
  directConnect: true,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--window-size=1280x768',
      ],
    },
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    print: function() {},
    showColors: true,
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });
    const { SpecReporter } = require('jasmine-spec-reporter');
    const specReporter = new SpecReporter({ spec: { displayStacktrace: 'pretty' } });
    jasmine.getEnv().addReporter(specReporter);
  },
  specs: [
    './src/**/*.e2e-spec.ts',
  ],
};
