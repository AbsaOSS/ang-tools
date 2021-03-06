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

import { NgModule } from '@angular/core'
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core'

import { ANG_TRANSLATE_COMMON_ASSETS, ANG_TRANSLATE_CONFIG } from '../ang-translate-core.module'

import { AngTranslateFakeLoader } from './ang-translate-fake-loader'
import { TranslatePipeMock } from './translate-testing-mock.pipe'
import { TranslateServiceTest } from './translate-testing-test.service'


@NgModule({
    declarations: [
        TranslatePipeMock,
    ],
    providers: [
        {
            provide: TranslateService,
            useClass: TranslateServiceTest,
        },
        {
            provide: TranslatePipe,
            useClass: TranslatePipeMock,
        },
        {
            provide: ANG_TRANSLATE_COMMON_ASSETS,
            useValue: {},
        },
        {
            provide: ANG_TRANSLATE_CONFIG,
            useValue: {},
        },
    ],
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: AngTranslateFakeLoader,
            },
        }),
    ],
    exports: [
        TranslatePipeMock,
        TranslateModule,
    ],
})
export class AngTranslateTestingModule {
}

