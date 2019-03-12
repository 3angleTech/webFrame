/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

 import {
  IWebFrameContextLocalizationService,
  IWebFrameContextNavigationService,
  IWebFrameContextStateService,
  IWebFrameContextUIService,
 } from '.';

import { IWebFrameContextService } from './web-frame-context.interface';

 export class WebFrameContextService implements IWebFrameContextService {
  public state: IWebFrameContextStateService;
  public localization: IWebFrameContextLocalizationService;
  public navigation: IWebFrameContextNavigationService;
  public ui: IWebFrameContextUIService;
 }
