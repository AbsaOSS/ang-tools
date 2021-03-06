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

import { AngRouterLinkActivePattern } from '../ang-router-link-active-pattern.models'


describe('AngRouterLinkActivePatternDirective', () => {
    describe('evaluateRegExp', () => {

        function examTestCases(testCases: any[]) {
            it.each(testCases)('URL "%s" CONDITION "%s" SHOULD BE %s', (url: string, pattern: string, expectedResult) => {
                expect(AngRouterLinkActivePattern.isUrlActive(url, pattern)).toEqual(expectedResult)
            })
        }

        describe('equals', () => {

            const testCases = [
                // url | pattern
                ['', '^$', true],
                [' ', '^$', false],
                ['/', '^$', false],
                ['sdcsdcsd', '^$', false],
                ['/', '^\\/$', true],
                ['/ ', '^\\/$', false],
                ['/sddcsdc', '^\\/$', false],
            ]

            examTestCases(testCases)

        })

        describe('starts with', () => {

            const testCases = [
                // url | pattern
                ['/', '^\\/', true],
                ['bla/sddcsdc', '^\\/', false],
            ]

            examTestCases(testCases)

        })

        describe('a few conditions', () => {

            const testCases = [
                // url | pattern
                ['/', '^\\/|^$', true],
                ['ac/aca', '^\\/|^$', false],
                ['bla/sddcsdc', '^\\/|.*sd.*', true],
            ]

            examTestCases(testCases)

        })
    })
})
