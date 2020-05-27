/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
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
    return 'ACCOUNT_FEATURE.SELECT_LANGUAGE.PAGE_TITLE';
  }
}
