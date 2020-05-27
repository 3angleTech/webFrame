// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
require('dotenv').config({
  path: require('path').join(__dirname, '../environments/e2e.env'),
});

/** @type { number } */
const highlightDelay = isNaN(Number(process.env.E2E_HIGHLIGHT_DELAY)) ? 0 : Number(process.env.E2E_HIGHLIGHT_DELAY);

/**
 * @type { import('protractor').Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  noGlobals: true,
  // Explicitly disable the deprecated WebDriver Control Flow.
  // TODO: Remove when updating to selenium-webdriver@4 and protractor@6.
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--window-size=1280x768',
      ],
    },
  },
  highlightDelay: highlightDelay,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000 + highlightDelay * 10,
    random: false,
    showColors: true,
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });
    const { SpecReporter } = require('jasmine-spec-reporter');
    /** @type { import('protractor').Reporter } */
    const specReporter = new SpecReporter({ spec: { displayStacktrace: 'raw' } });
    jasmine.getEnv().clearReporters();
    jasmine.getEnv().addReporter(specReporter);
  },
  params: {
    E2E_LOGIN_EMAIL: process.env.E2E_LOGIN_EMAIL,
    E2E_LOGIN_PASSWORD: process.env.E2E_LOGIN_PASSWORD,
  },
  specs: [
    './src/**/*.e2e-spec.ts',
  ],
};
