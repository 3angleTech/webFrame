/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides NotActivatedPageComponent.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-activated-page',
  templateUrl: './not-activated-page.component.html',
  styleUrls: ['./not-activated-page.component.scss'],
})
export class NotActivatedPageComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public getPageTitle(): string {
    return 'Email account not activated';
  }
}
