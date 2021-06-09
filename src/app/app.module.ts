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

import { AngLayoutModule } from '@absaoss/ang-tools/common/layout/ang'
import { AngTranslateCoreModule, ANG_TRANSLATE_COMMON_ASSETS, toAssetsFilePath } from '@absaoss/ang-tools/utils/translate'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        HttpClientModule,

        AngTranslateCoreModule,
        AngLayoutModule,

        AppRoutingModule
    ],
    providers: [
        {
            provide: ANG_TRANSLATE_COMMON_ASSETS,
            useValue: [
                toAssetsFilePath('app'),
                toAssetsFilePath('ang-tools.core'),
                toAssetsFilePath('ang-tools.common.layout.ang'),
            ]
        },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
