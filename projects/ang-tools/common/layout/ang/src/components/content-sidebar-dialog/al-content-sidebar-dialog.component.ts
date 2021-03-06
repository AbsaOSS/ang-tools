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

import { AngAnimationSlideXInOut } from '@absaoss/ang-tools/utils'
import { Component, EventEmitter, Input, Output } from '@angular/core'


@Component({
    selector: 'al-content-sidebar-dialog',
    templateUrl: './al-content-sidebar-dialog.component.html',
    animations: [
        AngAnimationSlideXInOut.getAnimation()
    ]
})
export class AlContentSidebarDialogComponent {

    @Input() visible = true
    @Input() dialogTitle: string

    @Output() close$ = new EventEmitter<void>()

    onCloseBtnClicked(): void {
        this.close$.emit()
        this.visible = false
    }
}
