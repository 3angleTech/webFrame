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

  // Generic system pages:
  ACCESS_DENIED = '/system/information/accessDenied',
  FORCE_REFRESH = '/system/force-refresh',
  NOT_FOUND = '/system/information/notFound',

  // Account feature pages:
  ACCOUNT_PAGE = '/account',
  FORGOT_PASSWORD_PAGE = '/account/forgot-password',
  LOGIN_PAGE = '/account/login',
  LOGOUT_PAGE = '/account/logout',
  SIGNUP_PAGE = '/account/signup',

  // Profile feature pages:
  PROFILE_PAGE = '/profile',
  PROFILE_SETTINGS_PAGE = '/profile/settings',
}
