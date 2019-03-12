/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { IWebFrameContextLocalizationService } from './web-frame-context-localization.service';
import { IWebFrameContextNavigationService } from './web-frame-context-navigation.service';
import { IWebFrameContextStateService } from './web-frame-context-state.service';
import { IWebFrameContextUIService } from './web-frame-context-ui.service';

export interface IWebFrameContextService {
  state: IWebFrameContextStateService;
  localization: IWebFrameContextLocalizationService;
  navigation: IWebFrameContextNavigationService;
  ui: IWebFrameContextUIService;
}
