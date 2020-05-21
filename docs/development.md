
## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To avoid issues with CORS during development, you can run `npm run start:proxy` for a dev server that includes a proxy.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

NOTES: To generate code outside the `src/app` directory,  you must either be in that directory or provide a path relative to the `src/app` directory:

    cd $PROJECT_ROOT
    ng generate pipe ../app-shared/core/pipes/example-pipe
    # OR
    cd $PROJECT_ROOT/src/app-shared
    ng generate pipe ./core/pipes/example-pipe


## Build

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/` directory.


## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

To run unit tests in a headless browser use: `npm run test:ci`


## Running end-to-end tests

Before running the tests, create an `environments/e2e.env` configuration file based on `environments/sample-e2e.env`.

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

To run unit tests in a headless browser use: `npm run e2e:ci`

To run or debug e2e tests in IDEs, you first need to run `npm run e2e` in order to prepare the WebDriver files.

[protractor.angular.io][https://protractor.angular.io/] contains information on how to write e2e tests. 

You can also use the protractor CLI directly in order to avoid having to wait for Angular to rebuild while only working on tests:

    # Run a development server in one terminal:
    npm run start

    # Install dependencies for running e2e tests
    npx webdriver-manager update

    # Run e2e tests in another terminal
    npx protractor ./web-frame-e2e/protractor-ci.conf.js

    # You can also limit the number of tests tests are being executed:
    npx protractor ./web-frame-e2e/protractor-ci.conf.js --specs ./web-frame-e2e/src/account/login.e2e-spec.ts
    # or use RegExp to only run certain tests, like tests that end with 'invalid credentials$':
    npx protractor ./web-frame-e2e/protractor-ci.conf.js --grep='invalid credentials$'


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
