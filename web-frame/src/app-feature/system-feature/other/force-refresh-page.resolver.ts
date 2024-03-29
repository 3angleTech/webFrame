/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { sortBy } from 'lodash';
import { concat, Observable } from 'rxjs';

import { APP_REFRESHER, IAppRefresher } from '~app-shared/core';

@Injectable()
export class ForceRefreshPageResolver  {
  constructor(
    @Inject(APP_REFRESHER) @Optional()
    private appRefresherList: IAppRefresher[] | null,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> | void {
    if (this.appRefresherList && this.appRefresherList.length) {
      return this.doRefresh();
    }

    return undefined;
  }

  private doRefresh(): Observable<void> {
    const observableList: Observable<void>[] = [];
    sortBy(this.appRefresherList, ['refresherWeight'])
      .forEach((appRefresher: IAppRefresher): void => {
        observableList.push(appRefresher.refresh());
      });

    return concat(...observableList);
  }
}
