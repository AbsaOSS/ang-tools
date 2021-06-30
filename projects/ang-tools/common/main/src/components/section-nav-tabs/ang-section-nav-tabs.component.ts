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

import { Component, EventEmitter, Input, Output } from '@angular/core'

import { AngSectionNavTabs } from './ang-section-nav-tabs.models'


@Component({
    selector: 'ang-section-nav-tabs',
    templateUrl: './ang-section-nav-tabs.component.html',
})
export class AngSectionNavTabsComponent {

    @Input() activeTabId: string

    @Input() tabsList: AngSectionNavTabs.TabsList = []

    @Output() activeTabChanged$ = new EventEmitter<string>()

    onTabClicked(tabInfo: AngSectionNavTabs.TabInfo): void {
        this.activeTabId = tabInfo.id
        this.activeTabChanged$.emit(tabInfo.id)
    }

}
