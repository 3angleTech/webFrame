/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ISandboxList, SandboxListItem } from './sandbox-list.interface';

@Component({
  selector: 'app-sandbox-list',
  templateUrl: './sandbox-list.component.html',
  styleUrls: ['./sandbox-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxListComponent implements OnInit {
  @Input()
  public list: ISandboxList;

  @Output()
  public readonly itemClicked: EventEmitter<SandboxListItem>
    = new EventEmitter<SandboxListItem>();

  constructor() {
  }

  public ngOnInit(): void {
  }

}
