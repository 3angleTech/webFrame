// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/5.4.2/lib/config.ts

/**
 * @type { import("protractor").Config }
 */
const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    // NOTE: Docker containers need properly created users.
    // @see https://developers.google.com/web/updates/2017/04/headless-chrome
    args: [
      '--headless',
      '--window-size=1280,720',
    ],
  },
};

exports.config = config;
