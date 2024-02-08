import { expect, test, describe } from '@jest/globals';

import {
    initedSource,
    expectedOutputWithSetup,
    expectedOutputRemovedImports,
    expectedOutputTransformedGet,
    expectedOutputRemovedComponentDecorator,
    expectedOutputRemovedClassDeclaration,
    expectedOutputTransformedWatchers,
    expectedOutputTransformedProps,
    expectedOutputTransformedToComposition,
} from '../mock/source';

import {
    examplesWithSetup,
    examplesRemovedImports,
    examplesTransformedGet,
    examplesRemovedComponentDecorator,
    examplesRemovedClassDeclaration,
    examplesTransformedWatchers,
    examplesTransformedProps,
    examplesTransformedToComposition,
} from '../mock/source-min';

import {
    addSetupToScript,
    removeImport,
    transformGetToComputed,
    removeComponentDecorator,
    removeClassDeclaration,
    transformWatchers,
    transformProps,
    transformToComposition,
} from './transform';

describe('full examples check', () => {
    test('source exist', () => {
        expect(initedSource).toBeDefined();
        expect(initedSource).toHaveLength(initedSource.length);
    });

    test('add setup to <script>', () => {
        for (const example of examplesWithSetup) {
            const transformedSource = addSetupToScript(example.source);
            expect(transformedSource).toBe(example.expectedOutput);
        }
    });

    test('remove imports', () => {
        for (const example of examplesRemovedImports) {
            const transformedSource = removeImport(example.source);
            expect(transformedSource).toBe(example.expectedOutput);
        }
    });

})

describe('full examples check', () => {
    test('source exist', () => {
        expect(initedSource).toBeDefined();
        expect(initedSource).toHaveLength(initedSource.length);
    });

    test('add setup to <script>', () => {
        const transformedSource = addSetupToScript(initedSource);
        expect(transformedSource).toBe(expectedOutputWithSetup);
    });

    test('remove imports', () => {
        const transformedSource = removeImport(initedSource);
        expect(transformedSource).toBe(expectedOutputRemovedImports);
    });

// test('transform get() to computed', () => {
//     const transformedSource = transformGetToComputed(initedSource);
//     expect(transformedSource).not.toMatch(/get\s+(\w+)\(\)/);
// });
//
// // Добавляем тесты для других функций transform
// test('remove component decorator', () => {
//     const transformedSource = removeComponentDecorator(initedSource);
//     expect(transformedSource).not.toMatch(/@Component\s*\([\s\S]*?\)\s*\n/);
// });
//
// test('remove class declaration', () => {
//     const transformedSource = removeClassDeclaration(initedSource);
//     expect(transformedSource).not.toMatch(/export\s+default\s+class\s+\w+\s+extends\s+Vue\s*{/);
//     expect(transformedSource).not.toMatch(/}\s*<\/script>/);
// });
//
// test('transform watchers', () => {
//     const transformedSource = transformWatchers(initedSource);
//     expect(transformedSource).toMatch(/watch\('(.+)'\s*,\s*\(/);
// });
//
// test('transform props', () => {
//     const transformedSource = transformProps(initedSource);
//     expect(transformedSource).toMatch(/interface Props {\s*([\s\S]*?)\s*}/);
// });
//
// test('transform to composition', () => {
//     const transformedSource = transformToComposition(initedSource);
//     expect(transformedSource).not.toMatch(/import Component from 'vue-class-component';/);
//     expect(transformedSource).not.toMatch(/@Component/);
// });
})