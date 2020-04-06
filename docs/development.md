
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

To run or debug unit tests in IDEs, you first need to run `npm run e2e` in order to prepare the WebDriver files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
