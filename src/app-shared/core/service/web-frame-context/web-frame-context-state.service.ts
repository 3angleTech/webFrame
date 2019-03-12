/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

import { User } from 'app-shared/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service holding the state of the application.
 */
export interface IWebFrameContextStateService {
  currentUser: BehaviorSubject<User>;
}

export class WebFrameContextStateService implements IWebFrameContextStateService {
  public currentUser: BehaviorSubject<User>;
}
