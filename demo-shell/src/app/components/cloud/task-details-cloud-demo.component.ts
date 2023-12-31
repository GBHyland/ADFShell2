/*!
 * @license
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
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

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@alfresco/adf-core';
import { TaskHeaderCloudComponent } from '@alfresco/adf-process-services-cloud';
import { PreviewService } from '../../services/preview.service';

@Component({
    selector: 'app-task-details-cloud-demo',
    templateUrl: './task-details-cloud-demo.component.html',
    styleUrls: ['./task-details-cloud-demo.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TaskDetailsCloudDemoComponent {

    @ViewChild('taskHeader', { static: true })
    taskHeader: TaskHeaderCloudComponent;

    taskId: string;
    appName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notificationService: NotificationService,
        private previewService: PreviewService
        ) {
        this.route.params.subscribe((params) => {
            this.taskId = params.taskId;
        });
        this.route.parent.params.subscribe((params) => {
            this.appName = params.appName;
        });

    }

    isTaskValid(): boolean {
        return this.appName !== undefined && this.taskId !== undefined;
    }

    goBack() {
        this.router.navigate([`/cloud/${this.appName}/`]);
    }

    onTaskCompleted() {
        this.goBack();
    }

    onFormContentClicked(resourceClicked: any) {
        this.previewService.showResource(resourceClicked.nodeId);
    }

    onFormSaved() {
        this.notificationService.openSnackMessage('Task has been saved successfully');
    }

    onError({ message: error }: Error) {
        let errorMessage;
        try {
            errorMessage = JSON.parse(error).message || JSON.parse(error).entry?.message;
            errorMessage = JSON.parse(errorMessage).message;
        } catch {}
        this.notificationService.showError(errorMessage || error);
    }
}
