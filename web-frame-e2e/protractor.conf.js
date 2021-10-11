/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies,no-magic-numbers */
/**
 * @file Protractor configuration file, see link for more information
 * @see https://github.com/angular/protractor/blob/master/lib/config.ts
 *
 * @typedef { import('protractor').Config } ProtractorConfig
 * @typedef { import('protractor').Reporter } ProtractorReporter
 */
require('dotenv').config({
  path: require('path').join(__dirname, '../environments/e2e.env'),
});

/** @type { number } */
const highlightDelay = isNaN(Number(process.env.E2E_HIGHLIGHT_DELAY)) ? 0 : Number(process.env.E2E_HIGHLIGHT_DELAY);

/**
 * @type { ProtractorConfig }
 */
exports.config = {
  allScriptsTimeout: 11000,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  noGlobals: true,
  // Explicitly disable the deprecated WebDriver Control Flow.
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
  onPrepare: function () {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json'),
    });
    const { SpecReporter } = require('jasmine-spec-reporter');
    /** @type { ProtractorReporter } */
    const specReporter = new SpecReporter({ spec: { displayStacktrace: 'raw' } });
    // eslint-disable-next-line no-undef
    const jasmineEnv = jasmine.getEnv();
    jasmineEnv.clearReporters();
    jasmineEnv.addReporter(specReporter);
  },
  params: {
    E2E_LOGIN_EMAIL: process.env.E2E_LOGIN_EMAIL,
    E2E_LOGIN_PASSWORD: process.env.E2E_LOGIN_PASSWORD,
  },
  specs: [
    './src/**/*.e2e-spec.ts',
  ],
};
