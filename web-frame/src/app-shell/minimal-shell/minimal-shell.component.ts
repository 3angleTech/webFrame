/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-minimal-shell',
  styleUrls: ['./minimal-shell.component.scss'],
  templateUrl: './minimal-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/use-component-view-encapsulation
  encapsulation: ViewEncapsulation.None,
})
export class MinimalShellComponent implements OnDestroy, OnInit {
  public readonly routeIsLoading: EventEmitter<boolean> = new EventEmitter<boolean>();
  private routerEventsSubscription: Subscription;

  constructor(
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.routerEventsSubscription = this.router.events.subscribe((routerEvent: Event): void => {
      this.handleRouterEvent(routerEvent);
    });
  }

  private handleRouterEvent(routerEvent: Event): void {
    if (this.navigationHasStarted(routerEvent)) {
      // Display the progress bar while loading and resolving routes.
      requestAnimationFrame((): void => {
        this.routeIsLoading.emit(true);
      });
    }

    if (this.navigationHasFinished(routerEvent)) {
      // Stop the loading animation before the next repaint.
      requestAnimationFrame((): void => {
        this.routeIsLoading.emit(false);
      });
    }
  }

  public ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
  }

  private navigationHasStarted(routerEvent: Event): routerEvent is NavigationStart {
    return routerEvent instanceof NavigationStart;
  }

  private navigationHasFinished(routerEvent: Event): routerEvent is NavigationEnd | NavigationCancel | NavigationError {
    return routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError;
  }
}
