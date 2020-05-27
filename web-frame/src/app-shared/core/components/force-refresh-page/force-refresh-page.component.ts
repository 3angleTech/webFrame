/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sortBy } from 'lodash';
import { concat, Observable, Subscription } from 'rxjs';
import { APP_REFRESHER, IAppRefresher, IWebFrameContextNavigationService, PAGE_URL } from '~app-shared/core';

@Component({
  selector: 'app-force-refresh-page',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForceRefreshPageComponent implements OnDestroy, OnInit {
  private doRefreshSubscription: Subscription;

  constructor(
    @Inject(APP_REFRESHER) @Optional()
    private appRefresherList: IAppRefresher[] | null,
    @Inject(IWebFrameContextNavigationService)
    private navigationService: IWebFrameContextNavigationService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnDestroy(): void {
    if (this.doRefreshSubscription) {
      this.doRefreshSubscription.unsubscribe();
    }
  }

  public ngOnInit(): void {
    console.log('ForceRefreshPageComponent.ngOnInit()', this.appRefresherList);
    if (this.appRefresherList && this.appRefresherList.length) {
      this.doRefreshSubscription = this.doRefresh().subscribe((): void => {
        this.navigateToDestinationPage();
      });
    } else {
      this.navigateToDestinationPage();
    }
  }

  private navigateToDestinationPage(): void {
    const destinationUrl: string = this.activatedRoute.snapshot.queryParamMap.get('destination') || PAGE_URL.HOME_PAGE;
    this.navigationService.navigateToUrl(destinationUrl);
  }

  private doRefresh(): Observable<void> {
    const observableList: Observable<void>[] = [];
    sortBy(this.appRefresherList, ['refresherWeight']).forEach((appRefresher: IAppRefresher): void => {
      observableList.push(appRefresher.refresh());
      console.log('appRefresher', appRefresher);
    });

    return concat(...observableList);
  }
}
