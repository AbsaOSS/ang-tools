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

import { BaseLocalStateComponent } from '@absaoss/ang-tools/utils'
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AppStore } from './store'


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseLocalStateComponent<AppStore.State> implements OnInit {

    constructor(private readonly router: Router) {
        super()
        this.updateState(
            AppStore.getDefaultState()
        )
    }

    ngOnInit(): void {
        this.init()
    }

    onSideNavExpanded(isExpanded: boolean): void {
        this.updateState(
            AppStore.reduceSideNavExpanded(this.state, isExpanded)
        )
    }

    private init(): void {
        this.updateState({
            isInitialized: true,
        })
    }
}
