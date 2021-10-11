/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { Inject, Injectable, OnDestroy } from '@angular/core';
import {
  LangChangeEvent,
  TranslateService as UpstreamTranslateService,
} from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

import {
  getLanguageMetadata,
  ILanguageMetadata,
  LANGUAGE_METADATA_LIST,
} from '../interfaces/language-metadata.interface';
import { DEFAULT_LANGUAGE } from '../other/default-language.token';

@Injectable()
export class TranslateInitializerService implements OnDestroy {
  private languageChangeSubscription: Subscription;

  constructor(
    @Inject(DEFAULT_LANGUAGE)
    private readonly defaultLanguage: string,
    @Inject(LANGUAGE_METADATA_LIST)
    private readonly languageMetadataList: ILanguageMetadata[],
    private readonly translateService: UpstreamTranslateService,
  ) {
  }

  public initialize(): Observable<void> {
    this.validateDefaultLanguage();
    const availableLanguages: string[] = this.getAvailableLanguages();
    const preferredLanguage = this.getPreferredLanguage(availableLanguages);
    this.translateService.setDefaultLang(preferredLanguage);
    this.initWatchLanguageChange();

    return this.translateService.use(preferredLanguage);
  }

  public ngOnDestroy(): void {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }

  private validateDefaultLanguage(): void | never {
    if (this.defaultLanguage && !getLanguageMetadata(this.languageMetadataList, this.defaultLanguage)) {
      throw new Error('Invalid default language provided.');
    }
  }

  private getAvailableLanguages(): string[] {
    return this.languageMetadataList.map(
      (metadata: ILanguageMetadata): string => {
        return metadata.localeId;
      });
  }

  private getPreferredLanguage(availableLanguages: string[]): string {
    const preferredLang: string = this.defaultLanguage || availableLanguages[0];
    if (!this.defaultLanguage) {
      const browserLang: string = this.translateService.getBrowserLang()
        .split('-')[0];
      if (browserLang && availableLanguages.includes(browserLang)) {
        return browserLang;
      }
    }

    return preferredLang;
  }

  private initWatchLanguageChange(): void {
    this.languageChangeSubscription = this.translateService.onLangChange.asObservable()
      .subscribe((changeEvent: LangChangeEvent): void => {
        const languageMetadata = getLanguageMetadata(this.languageMetadataList,
          changeEvent.lang);
        if (!languageMetadata) {
          throw new Error('Invalid language used.');
        }
        document.documentElement.setAttribute('lang', changeEvent.lang);
        if (languageMetadata?.isRTL) {
          document.documentElement.setAttribute('dir', 'rtl');
        } else {
          document.documentElement.setAttribute('dir', 'ltr');
        }
      });
  }
}
