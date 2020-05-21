// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/5.4.2/lib/config.ts

/**
 * @type { import("protractor").Config }
 */
const config = require('./protractor.conf').config;

delete config.highlightDelay;
config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    // @see https://developers.google.com/web/updates/2017/04/headless-chrome
    args: [
      '--headless',
      // NOTE: Docker containers need properly created users.
      // TODO: Enable the sandbox.
      '--no-sandbox',
      '--window-size=1280,720',
    ],
  },
};

exports.config = config;
