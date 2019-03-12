/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Injectable, InjectionToken } from '@angular/core';
import {
  IWebFrameContextLocalizationService,
  IWebFrameContextNavigationService,
  IWebFrameContextStateService,
  IWebFrameContextUIService,
 } from '.';

/**
 * Service that can be injected in pages in order to have quick access to the state of
 * the application and commonly used services.
 */
export interface IWebFrameContextService {
  state: IWebFrameContextStateService;
  localization: IWebFrameContextLocalizationService;
  navigation: IWebFrameContextNavigationService;
  ui: IWebFrameContextUIService;
}
export const IWebFrameContextService = new InjectionToken('IWebFrameContextService');

@Injectable()
export class WebFrameContextService implements IWebFrameContextService {
  public state: IWebFrameContextStateService;
  public localization: IWebFrameContextLocalizationService;
  public navigation: IWebFrameContextNavigationService;
  public ui: IWebFrameContextUIService;
 }
