/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the main navigation menu.
 */
import { Component, HostBinding, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  @HostBinding('class.app-navigation-menu')
  public componentClass: boolean = true;

  public isDevMode: boolean = isDevMode();

  constructor() { }

  public ngOnInit(): void {
  }

}
