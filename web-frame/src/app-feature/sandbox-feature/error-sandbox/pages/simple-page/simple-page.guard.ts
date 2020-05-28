/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { simplePageErrorTrigger } from './simple-page-error-trigger';

@Injectable()
export class SimplePageGuard implements CanActivate {
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {

    return of(true).pipe(
      map((): boolean => {
        const triggerFakeErrorType: string = next.paramMap.get('triggerFakeErrorType');
        simplePageErrorTrigger(triggerFakeErrorType);

        return true;
      }),
    );
  }
}
