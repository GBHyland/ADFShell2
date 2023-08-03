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

import { CommentModel } from '../../models';
import { Observable, of } from 'rxjs';
import { CommentsService } from '../interfaces/comments-service.interface';
import { testUser } from './comments.stories.mock';
import { UserLike } from '../../pipes/user-like.interface';

export class CommentsServiceStoriesMock implements Partial<CommentsService> {

    constructor() {}

    get(_id: string): Observable<CommentModel[]> {
        return commentsResponseMock.getComments();
    }
    add(_id: string, message = 'test comment'): Observable<CommentModel> {
        return commentsResponseMock.addComment(message);
    }
}

export const commentsResponseMock = {
    getComments: () => of([
        new CommentModel({
            id: 1,
            message: 'Test Comment',
            created: new Date(),
            createdBy: {
                enabled: true,
                firstName: 'hruser',
                displayName: 'hruser',
                quota: -1,
                quotaUsed: 12,
                emailNotificationsEnabled: true,
                company: {
                    organization: 'test',
                    address1: 'test',
                    address2: 'test',
                    address3: 'test',
                    postcode: 'test',
                    telephone: 'test',
                    fax: 'test',
                    email: 'test'
                },
                id: 'hruser',
                email: 'test',
                isAdmin: () => false
            } as UserLike,
            isSelected: false
        }),
        new CommentModel({
            id: 2,
            message: 'Test Comment',
            created: new Date(),
            createdBy: {
                enabled: true,
                firstName: 'hruser',
                displayName: 'hruser',
                quota: -1,
                quotaUsed: 12,
                emailNotificationsEnabled: true,
                company: {
                    organization: 'test',
                    address1: 'test',
                    address2: 'test',
                    address3: 'test',
                    postcode: 'test',
                    telephone: 'test',
                    fax: 'test',
                    email: 'test'
                },
                id: 'hruser',
                email: 'test',
                isAdmin: () => false
            } as UserLike,
            isSelected: false
        }),
        new CommentModel({
            id: 3,
            message: 'Test Comment',
            created: new Date(),
            createdBy: {
                enabled: true,
                firstName: 'hruser',
                displayName: 'hruser',
                quota: -1,
                quotaUsed: 12,
                emailNotificationsEnabled: true,
                company: {
                    organization: 'test',
                    address1: 'test',
                    address2: 'test',
                    address3: 'test',
                    postcode: 'test',
                    telephone: 'test',
                    fax: 'test',
                    email: 'test'
                },
                id: 'hruser',
                email: 'test',
                isAdmin: () => false
            } as UserLike,
            isSelected: false
        })
    ]),
    addComment: (message: string) => of(
        new CommentModel({
            id: 1,
            message,
            created: new Date(),
            createdBy: testUser,
            isSelected: false
        })
    )
};
