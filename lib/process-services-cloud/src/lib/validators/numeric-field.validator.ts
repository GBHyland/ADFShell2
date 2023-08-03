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

import { CardViewItemValidator } from '@alfresco/adf-core';

export class NumericFieldValidator implements CardViewItemValidator {

    message: string = 'ADF_CLOUD_TASK_HEADER.FORM_VALIDATION.INVALID_FIELD';

    isValid(value: any): boolean {
        if (!value) {
            return false;
        }
        return !isNaN(+value) && !this.whitespaces(value);
    }

    whitespaces(value: any): boolean {
        const isWhitespace = (value || '').trim().length === 0;
        return !(value.length === 0 || !isWhitespace);
    }
}
