/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITranslationService } from '~app-shared/translate';

@Component({
  selector: 'app-progress-bar',
  styleUrls: ['./progress-bar.component.scss'],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.aria-valuetext]': 'translationService.translate(infoText)',
    'attr.aria-busy': 'true',
    'attr.aria-live': 'polite',
    'attr.role': 'progressbar',
  },
})
export class ProgressBarComponent implements OnInit {
  @Input()
  public infoText: string = 'GENERAL.LOADING_PAGE';

  constructor(
    public readonly translationService: ITranslationService,
  ) {
  }

  public ngOnInit(): void {
  }

}
