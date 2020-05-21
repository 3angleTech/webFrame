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
  selector: 'app-minimal-shell',
  templateUrl: './minimal-shell.component.html',
  styleUrls: ['./minimal-shell.component.scss'],
})
export class MinimalShellComponent implements OnInit {
  @HostBinding('class.app-minimal-shell')
  public componentClass: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

}
