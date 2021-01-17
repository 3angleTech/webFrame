/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { IInformationPageDetails } from '../interfaces/information-page-details.interface';

export const INFORMATION_PAGES_DETAILS: Record<string, IInformationPageDetails> = {
  accessDenied: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.ACCESS_DENIED.PAGE_TITLE',
    message: undefined,
    type: 'warning',
  },
  notFound: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.PAGE_NOT_FOUND.PAGE_TITLE',
    message: undefined,
    type: 'warning',
  },
  notActivated: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.NOT_ACTIVATED.PAGE_TITLE',
    message: undefined,
    type: 'warning',
  },
  resetPasswordSuccess: {
    title: 'SYSTEM_FEATURE.INFORMATION_PAGE.RESET_PASSWORD_SUCCESS.PAGE_TITLE',
    message: undefined,
    type: 'success',
  },
};
