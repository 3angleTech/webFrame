
# app-feature modules

The `app-feature` modules expose encapsulated application features and are dynamically loaded, in
order to improve the initial load time of the application. For example:

* **AccountFeatureModule**: provides features related to the user accounts like a login page.
* **ProfileFeatureModule**: provides features related to the user profile like an edit page.
* **SandboxFeatureModule**: provides sandbox for feature demos and feature test purposes.

The app-feature modules should not have inter-dependencies, and they should only import from
`app-shared` and `app-shell`.

NOTES:
* modules MUST have the `FeatureModule` suffix and their directory MUST have a `-feature` suffix.
* modules MUST NOT have any public APIs.
