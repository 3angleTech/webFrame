/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class SlowLoadingResolver implements Resolve<void> {
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> {
    const pageLoadDelay: number = 5000;

    return of(undefined).pipe(
      delay(pageLoadDelay),
    );
  }
}
