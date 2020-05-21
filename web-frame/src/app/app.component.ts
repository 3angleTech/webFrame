/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(
    private readonly router: Router,
  ) {
  }

  public ngOnInit(): void {
    // NOTE: Initial navigation is delayed until after APP_INITIALIZER.
    // @see https://angular.io/api/router/InitialNavigation
    this.router.initialNavigation();
  }
}
