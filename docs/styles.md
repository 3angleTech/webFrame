
## Checking for coding standards

Make sure that your IDE has support for [stylelint](https://stylelint.io/) or run:
```
npm run lint:style
```

This will ensure that you write styles in a consistent manner.

> NOTE: The stylelint config for this project is based on the Bootstrap v4 config.


## Code snippets

To import helper mixins and variables from the `includes` directory:
```scss
@import "app-styling-utils";
@import "app-styling-variables";

.app-message--success {
  background-color: app-get-color($app-status-colors, "success");
  color: app-get-contrast($app-status-colors, "success");
}

.app-box .app-box__title {
  background-color: app-get-contrast($app-text-colors, "normal");
  color: app-get-color($app-text-colors, "normal");
}
```
