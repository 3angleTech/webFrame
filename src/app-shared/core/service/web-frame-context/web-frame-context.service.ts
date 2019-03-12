
/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

 import {
  IWebFrameContextLocalizationService,
  IWebFrameContextNavigationService,
  IWebFrameContextService,
  IWebFrameContextStateService,
  IWebFrameContextUIService,
} from './web-frame-context.interface';

 export class WebFrameContextService implements IWebFrameContextService {
  public state: IWebFrameContextStateService;
  public localization: IWebFrameContextLocalizationService;
  public navigation: IWebFrameContextNavigationService;
  public ui: IWebFrameContextUIService;
 }
