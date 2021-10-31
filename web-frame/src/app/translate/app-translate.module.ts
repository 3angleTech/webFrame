/**
 * @license
 * Copyright (c) 2018-2020 THREEANGLE SOFTWARE SOLUTIONS SRL
 * Available under MIT license webFrame/LICENSE
 */
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// eslint-disable-next-line no-restricted-imports
import { TranslateModule as UpstreamTranslateModule } from '@ngx-translate/core';

import { AVAILABLE_LANGUAGES_METADATA, NGX_TRANSLATE_CONFIG, TranslateModule } from '~app-shared/translate';

@NgModule({
  imports: [
    HttpClientModule,
    // NOTE: The TranslateInitializerService is used to finish configuring the '@ngx-translate/core'.
    UpstreamTranslateModule.forRoot(NGX_TRANSLATE_CONFIG),
    TranslateModule.forRoot({
      LANGUAGE_METADATA_LIST: AVAILABLE_LANGUAGES_METADATA,
    }),
  ],
})
export class AppTranslateModule {
}
