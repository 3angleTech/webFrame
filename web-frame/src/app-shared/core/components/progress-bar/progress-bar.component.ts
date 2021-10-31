/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges } from '@angular/core';

import { ITranslationService } from '~app-shared/translate';

@Component({
  selector: 'app-progress-bar',
  styleUrls: ['./progress-bar.component.scss'],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnChanges {
  @Input()
  public infoText: string = 'GENERAL.LOADING_PAGE';

  @HostBinding('attr.aria-valuetext')
  public ariaValuetext: string | undefined = undefined;

  @HostBinding('attr.aria-busy')
  public readonly ariaBusy: string = 'true';

  @HostBinding('attr.aria-live')
  public readonly ariaLive: string = 'polite';

  @HostBinding('attr.role')
  public readonly ariaRole: string = 'progressbar';

  constructor(
    public readonly translationService: ITranslationService,
  ) {
  }

  public ngOnChanges(): void {
    this.ariaValuetext = this.infoText ? this.translationService.translate(this.infoText) : undefined;
  }

}
