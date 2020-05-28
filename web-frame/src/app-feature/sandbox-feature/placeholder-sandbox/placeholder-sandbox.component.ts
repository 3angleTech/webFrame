/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */

/**
 * A placeholder-sandbox page that can be used as placeholder-sandbox for navigation menu items.
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { upperFirst } from 'lodash';

@Component({
  selector: 'app-placeholder-sandbox',
  styleUrls: ['./placeholder-sandbox.component.scss'],
  templateUrl: './placeholder-sandbox.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PlaceholderSandboxComponent implements OnInit {
  private placeholderPageTitle: string = 'Implement page!';

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    if (title) {
      this.placeholderPageTitle = upperFirst(title.replace(/-/g, ' '));
    }
  }

  public getPageTitle(): string {
    return `Sandbox: ${this.placeholderPageTitle}`;
  }
}
