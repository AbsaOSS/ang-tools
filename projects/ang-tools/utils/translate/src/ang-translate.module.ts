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

import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http'
import { Inject, InjectionToken, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core'

import { ANG_TRANSLATE_COMMON_ASSETS, ANG_TRANSLATE_CONFIG } from './ang-translate-core.module'
import {
    AngTranslateChildConfig,
    AngTranslateRootConfig,
    ModuleAssetsFactory,
    TranslateLoaderFactory,
} from './ang-translate.models'


export const ANG_TRANSLATE_ASSETS = new InjectionToken<string[]>('ANG_TRANSLATE_ASSETS')
export const ANG_TRANSLATE_CHILD_CONFIG = new InjectionToken<AngTranslateChildConfig>('ANG_TRANSLATE_CHILD_CONFIG')


@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild({
            useDefaultLang: true,
            loader: {
                provide: TranslateLoader,
                useFactory: TranslateLoaderFactory,
                deps: [HttpClient, ANG_TRANSLATE_ASSETS, ANG_TRANSLATE_COMMON_ASSETS],
            },
            isolate: true,
        }),
    ],
    exports: [
        TranslateModule,
    ],
})
export class AngTranslateModule {

    constructor(
        @Optional() @Inject(ANG_TRANSLATE_CONFIG) config: AngTranslateRootConfig, translate: TranslateService,
    ) {
        if (!config) {
            throw new Error(
                'ANG_TRANSLATE_CONFIG provider does not exist. Please inject AngTranslateCoreModule into your root module.',
            )
        }

        translate.setDefaultLang(config.defaultLang)
    }

    static forChild(config?: AngTranslateChildConfig): ModuleWithProviders<AngTranslateModule> {
        return {
            ngModule: AngTranslateModule,
            providers: [
                {
                    provide: ANG_TRANSLATE_ASSETS,
                    useFactory: ModuleAssetsFactory,
                    deps: [ANG_TRANSLATE_CHILD_CONFIG],
                },
                {
                    provide: ANG_TRANSLATE_CHILD_CONFIG,
                    useValue: config || {},
                },
            ],
        }
    }
}
