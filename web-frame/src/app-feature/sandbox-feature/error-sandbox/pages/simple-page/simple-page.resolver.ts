/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { simplePageErrorTrigger } from './simple-page-error-trigger';

@Injectable()
export class SimplePageResolver implements Resolve<void> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
    return of(undefined).pipe(
      map((): void => {
        const triggerFakeErrorType: string = route.paramMap.get('triggerFakeErrorType');
        simplePageErrorTrigger(triggerFakeErrorType);
      }),
    );
  }
}
