/*
 * Copyright 2021 ABSA Group Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { HttpClient } from '@angular/common/http'
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'

import { AngTranslateRootConfig, COMMON_ASSETS, DEFAULT_CONFIG, TranslateLoaderFactory } from './ang-translate.models'


export const ANG_TRANSLATE_COMMON_ASSETS = new InjectionToken<string[]>('ANG_TRANSLATE_COMMON_ASSETS')
export const ANG_TRANSLATE_CONFIG = new InjectionToken<AngTranslateRootConfig>('ANG_TRANSLATE_CONFIG')


@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: TranslateLoaderFactory,
                deps: [HttpClient, ANG_TRANSLATE_COMMON_ASSETS],
            },
        }),
    ],
    providers: [
        {
            provide: ANG_TRANSLATE_COMMON_ASSETS,
            useValue: COMMON_ASSETS,
        },
        {
            provide: ANG_TRANSLATE_CONFIG,
            useValue: DEFAULT_CONFIG,
        },
    ],
    exports: [
    ],
})
export class AngTranslateCoreModule {
}
