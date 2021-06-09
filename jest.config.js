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

require('jest-preset-angular/ngcc-jest-processor')

module.exports = {
    'preset': 'jest-preset-angular',
    'setupFilesAfterEnv': [
        '<rootDir>/setup-jest.ts'
    ],
    'transformIgnorePatterns': [
        'node_modules/(?!@ngrx)'
    ],
    'rootDir': __dirname,
    'coverageReporters': [
        'text',
        'html',
        'cobertura',
    ],
    'moduleNameMapper': {
        '^lodash-es$': __dirname + '/node_modules/lodash/index.js',
        '/@absaoss\\/ang-tools/': __dirname + '/projects/ang-tools/main/src/public-api',
        '^@absaoss\\/ang-tools$': __dirname + '/projects/ang-tools/main/src/public-api',
        '/@absaoss\\/ang-tools\\/common/': __dirname + '/projects/ang-tools/common/main/src/public-api',
        '^@absaoss\\/ang-tools\\/common$': __dirname + '/projects/ang-tools/common/main/src/public-api',
        '/@absaoss\\/ang-tools\\/utils/': __dirname + '/projects/ang-tools/utils/main/src/public-api',
        '^@absaoss\\/ang-tools\\/utils$': __dirname + '/projects/ang-tools/utils/main/src/public-api',
        '/@absaoss\\/ang-tools\\/utils\\/translate/': __dirname + '/projects/ang-tools/utils/translate/src/public-api',
        '^@absaoss\\/ang-tools\\/utils\\/translate$': __dirname + '/projects/ang-tools/utils/translate/src/public-api',
    },
    'resolver': null,
    'globals': {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.spec.json'
        }
    }
};
