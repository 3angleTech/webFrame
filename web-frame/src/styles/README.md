
### Global includes 

To import helper mixins and variables from the `includes` directory remove
the `_` prefix from the filename. The `_` prefix instructs the compiler to
ignore any output:
```scss
@import "app-styling-utils";
@import "app-styling-variables";
```

> NOTE:  Files in the `includes` directory should never generate any output.
