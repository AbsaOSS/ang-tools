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

import { AngIconModule } from '@absaoss/ang-tools/common'
import { AngUtilsModule } from '@absaoss/ang-tools/utils'
import { AngTranslateModule } from '@absaoss/ang-tools/utils/translate'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatTooltipModule } from '@angular/material/tooltip'
import { RouterModule } from '@angular/router'


import {
    AlBreadcrumbsComponent,
    AlContentHeaderComponent,
    AlContentSidebarDialogComponent,
    AlFakePageContentComponent,
    AlSidebarLogoComponent,
    AlSidebarMenuComponent,
    AngLayoutComponent,
} from './components'
import { AlSectionDirective } from './directives'


@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatSidenavModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,

        AngUtilsModule,
        AngIconModule,
        AngTranslateModule.forChild()
    ],
    declarations: [
        AngLayoutComponent,
        AlContentSidebarDialogComponent,
        AlFakePageContentComponent,
        AlContentHeaderComponent,
        AlSidebarLogoComponent,
        AlBreadcrumbsComponent,
        AlSidebarMenuComponent,
        AlSectionDirective
    ],
    exports: [
        AngLayoutComponent,
        AlContentSidebarDialogComponent,
        AlFakePageContentComponent,
        AlContentHeaderComponent,
        AlSidebarLogoComponent,
        AlBreadcrumbsComponent,
        AlSidebarMenuComponent,
        AlSectionDirective
    ]
})
export class AngLayoutModule {

}
