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

import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core'

import { AlSectionDirective } from '../../directives'
import { AngLayoutSection } from '../../models'


@Component({
    selector: 'ang-layout',
    templateUrl: './ang-layout.component.html',
})
export class AngLayoutComponent implements AfterContentInit {

    @ContentChildren(AlSectionDirective) sectionTemplatesQueryList: QueryList<AlSectionDirective>

    @Input() isEmbeddedMode = false
    @Input() isSideNavExpanded = false
    @Input() appVersion: string
    @Input() buildRevision: string
    @Input() buildDate: Date
    @Input() noHeader = true

    @Output() sidenavExpanded$ = new EventEmitter<{ isExpanded: boolean }>()

    sectionsTemplatesCollection: Partial<{ [K in AngLayoutSection.SectionName]: TemplateRef<any> }> = {}

    readonly SectionName = AngLayoutSection.SectionName


    ngAfterContentInit(): void {
        // calculate templates collection
        this.sectionsTemplatesCollection = this.sectionTemplatesQueryList
            .reduce(
                (result, item) => {
                    const templateName = item.sectionName
                    result[templateName] = item.template
                    return result
                },
                {},
            )
    }

    onExpandedToggleBtnClicked(): void {
        this.isSideNavExpanded = !this.isSideNavExpanded
        this.sidenavExpanded$.emit({
            isExpanded: this.isSideNavExpanded
        })
    }
}
