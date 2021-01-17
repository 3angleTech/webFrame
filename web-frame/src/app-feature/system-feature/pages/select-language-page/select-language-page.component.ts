/**
 * @license
 * Copyright (c) 2018-2021 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-language-page',
  styleUrls: ['./select-language-page.component.scss'],
  templateUrl: './select-language-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectLanguagePageComponent implements OnInit {

  constructor() {
  }

  public ngOnInit(): void {
  }

  public getPageTitle(): string {
    return 'SYSTEM_FEATURE.SELECT_LANGUAGE.PAGE_TITLE';
  }
}
