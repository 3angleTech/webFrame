/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Enum providing a list of well known page URLs.
 */
export const enum PAGE_URL {
  HOME_PAGE = '/',
  STANDALONE_ERROR_PAGE = '/error/index.html',

  // TODO: Move these out of the account feature.
  ACCESS_DENIED_PAGE = '/account/information/accessDenied',
  FORCE_REFRESH = '/account/force-refresh',
  PAGE_NOT_FOUND_PAGE = '/account/information/pageNotFound',

  // Account Feature
  ACCOUNT_PAGE = '/account',
  FORGOT_PASSWORD_PAGE = '/account/forgot-password',
  LOGIN_PAGE = '/account/login',
  LOGOUT_PAGE = '/account/logout',
  SIGNUP_PAGE = '/account/signup',

  // Profile Feature
  PROFILE_PAGE = '/profile',
  PROFILE_SETTINGS_PAGE = '/profile/settings',
}
