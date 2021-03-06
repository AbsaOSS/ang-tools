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

import { AngTranslateModule } from '@absaoss/ang-tools/utils/translate'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTooltipModule } from '@angular/material/tooltip'

import { AngSearchBoxComponent } from './ang-search-box.component'


@NgModule({
    declarations: [
        AngSearchBoxComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,

        AngTranslateModule.forChild({}),
    ],
    exports: [
        AngSearchBoxComponent
    ],
})
export class AngSearchBoxModule {
}
