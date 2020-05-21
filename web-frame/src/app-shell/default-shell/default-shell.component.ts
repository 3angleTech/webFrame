/**
 * @license
 * Copyright (c) 2018 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * Provides the DefaultShellComponent.
 */
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-shell',
  templateUrl: './default-shell.component.html',
  styleUrls: ['./default-shell.component.scss'],
})
export class DefaultShellComponent implements OnInit {
  @HostBinding('class.app-default-shell')
  public componentClass: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

}
