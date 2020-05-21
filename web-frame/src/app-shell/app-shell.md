
# app-shell modules

The `app-shell` modules expose components that are used to define the overall structure around the
main content of the page, a "shell" or a "frame". For example:

* **MinimalAppShellModule**: used for simple pages, like the user login and registration pages.
* **DefaultAppShellModule**: used for most application pages, it exposes a navigation menu and a
  page header.

The size of the app-shell modules should be as small as possible, in order to have small
stand-alone modules that are shared between `app-feature` modules.

Multiple app-shell modules can be used inside app-feature modules, but they should not be nested,
this will cause page layout issues.

Each app-shell MUST contain an `index.ts` file that exposes all publicly available objects.

NOTES:
* modules MUST have the `ShellModule` suffix and their directory MUST have a `-shell` suffix.
* modules MUST contain an `index.ts` file that exposes all publicly available APIs.
