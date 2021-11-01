/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { IInformationPageDetails } from '../interfaces/information-page-details.interface';

export const INFORMATION_PAGES_DETAILS: Record<string, IInformationPageDetails> = {
  AccessDeniedError: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.ACCESS_DENIED.PAGE_TITLE',
    message: undefined,
    type: 'warning',
  },
  PageNotFoundError: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.PAGE_NOT_FOUND.PAGE_TITLE',
    message: undefined,
    type: 'warning',
  },
  InvalidAppVersionError: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.INVALID_APP_VERSION.PAGE_TITLE',
    message: 'SYSTEM_FEATURE.INFORMATION_PAGE.INVALID_APP_VERSION.MESSAGE',
    type: 'danger',
    buttonText: 'SYSTEM_FEATURE.INFORMATION_PAGE.INVALID_APP_VERSION.BUTTON',
  },
  AccountNotActivated: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.ACCOUNT_NOT_ACTIVATED.PAGE_TITLE',
    message: undefined,
    type: 'warning',
  },
  ResetPasswordSuccess: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.RESET_PASSWORD_SUCCESS.PAGE_TITLE',
    message: undefined,
    type: 'success',
  },
};
