/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { InjectionToken } from '@angular/core';
import { find } from 'lodash';

export interface ILanguageMetadata<LocaleId extends string = string> {
  name: string;
  localeId: LocaleId;
  isRTL: boolean;
}

export function getLanguageMetadata<LocaleId extends string = string>(
  list: ILanguageMetadata<LocaleId>[],
  localeId: string,
): ILanguageMetadata<LocaleId> | undefined {
  const partial: Partial<ILanguageMetadata<LocaleId>> = {
    localeId: localeId as LocaleId,
  };
  return find(list, partial) as ILanguageMetadata<LocaleId> | undefined;
}

export const LANGUAGE_METADATA_LIST: InjectionToken<ILanguageMetadata[]> =
  new InjectionToken<ILanguageMetadata[]>('LANGUAGE_METADATA_LIST');
