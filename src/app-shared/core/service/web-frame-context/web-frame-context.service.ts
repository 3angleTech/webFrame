/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { Inject, Injectable, InjectionToken } from '@angular/core';
import { IWebFrameContextLocalizationService } from './web-frame-context-localization.service';
import { IWebFrameContextNavigationService } from './web-frame-context-navigation.service';
import { IWebFrameContextStateService } from './web-frame-context-state.service';
import { IWebFrameContextUIService } from './web-frame-context-ui.service';

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
  constructor(
    @Inject(IWebFrameContextStateService)
    public state: IWebFrameContextStateService,
    @Inject(IWebFrameContextLocalizationService)
    public localization: IWebFrameContextLocalizationService,
    @Inject(IWebFrameContextNavigationService)
    public navigation: IWebFrameContextNavigationService,
    @Inject(IWebFrameContextUIService)
    public ui: IWebFrameContextUIService,
  ) {
  }
 }
