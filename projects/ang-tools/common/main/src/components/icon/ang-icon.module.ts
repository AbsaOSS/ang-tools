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
import { NgModule } from '@angular/core'
import { MatIconModule, MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

import { AngIconWithTextComponent } from './components/icon-with-text/ang-icon-with-text.component'
import { AngIconComponent } from './components/icon/ang-icon.component'
import { ANG_EXTRA_ICONS_COLLECTION } from './models/ang-icon.models'


@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
    ],
    declarations: [
        AngIconComponent,
        AngIconWithTextComponent
    ],
    exports: [
        MatIconModule,
        AngIconComponent,
        AngIconWithTextComponent
    ],
})
export class AngIconModule {

    constructor(private readonly matIconRegistry: MatIconRegistry,
                private readonly sanitizer: DomSanitizer) {

        ANG_EXTRA_ICONS_COLLECTION.forEach(
            iconName => this.addIcon(iconName),
        )
    }

    private addIcon(iconName: string): void {
        const BASE_HREF: string = document?.getElementsByTagName('base')[0]?.attributes['href']?.value || '/'
        const iconsBasePath = `${BASE_HREF}assets/images/icons`


        this.matIconRegistry.addSvgIcon(
            iconName,
            this.sanitizer.bypassSecurityTrustResourceUrl(`${iconsBasePath}/${iconName}.svg`),
        )
    }

}
