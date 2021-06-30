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

import { AngSectionNavTabs } from '@absaoss/ang-tools/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-components-example-page',
    templateUrl: './components-example-page.component.html'
})
export class AppComponentsExamplePageComponent {

    readonly sectionNavTabsList: AngSectionNavTabs.TabInfo[] = [
        {
            id: '1',
            label: 'Tab title #1',
        },
        {
            id: '2',
            label: 'Tab title #3',
        },
        {
            id: '3',
            label: 'Tab title #4',
        },
        {
            id: '4',
            label: 'Tab title #5',
        },
        {
            id: '5',
            label: 'Tab title #6 veeeeeryyyyy-veeeeeryyyyy long',
        },
        {
            id: '6',
            label: 'Tab title #7',
        },
        {
            id: '7',
            label: 'Tab title #8',
        },
        {
            id: '8',
            label: 'Tab title #9',
        },
    ]

    activeTabId = '1'

}
