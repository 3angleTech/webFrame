/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface IAppRefresher {
  /**
   * Controls the execution order, the APP_REFRESHER instances with lower weight will be executed first.
   */
  refresherWeight: number;

  /**
   * Method for performing the refresh.
   */
  refresh(): Observable<void>;
}

/**
 * An injection token that allows you to provide one or more refresher functions.
 * These function are injected when a module is imported and executed when the
 * force-refresh page is initialized.
 *
 * NOTE: Whenever possible, the force-refresh page should be avoided.
 */
export const APP_REFRESHER: InjectionToken<IAppRefresher[]>
  = new InjectionToken<IAppRefresher[]>('APP_REFRESHER');
