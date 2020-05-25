/**
 * @license
 * Copyright (c) 2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { ILanguageMetadata, ITranslationService, LANGUAGE_METADATA_LIST } from '~app-shared/translate';

@Component({
  selector: 'app-language-switcher',
  styleUrls: ['./language-switcher.component.scss'],
  templateUrl: './language-switcher.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageSwitcherComponent implements OnInit {
  private currentLanguageMetadata: ILanguageMetadata;

  constructor(
    @Inject(LANGUAGE_METADATA_LIST)
    public readonly languageMetadataList: ILanguageMetadata[],
    @Inject(ITranslationService)
    private readonly translationService: ITranslationService,
  ) {
  }

  public ngOnInit(): void {
    this.currentLanguageMetadata = this.translationService.getCurrentLanguageMetadata();
  }

  public changeLanguage(languageMetadata: ILanguageMetadata): void {
    this.translationService.changeLanguage(languageMetadata).subscribe(() => {
      // Nothing to do.
    });
  }
}
