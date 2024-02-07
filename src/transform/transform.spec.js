import {expect, test} from '@jest/globals';
import {sourceMock, sourceMockRemovedImports, sourceMockWithSetup} from "../mock/source";
import {addSetupToScript, removeImport, transformGetToComputed} from "./transform";

test('source exist', () => {
    expect(sourceMock).toBeDefined();
    expect(sourceMock).toHaveLength(sourceMock.length);
});

test('add setup to <script>', () => {
    const transformedSource = addSetupToScript(sourceMock)
    expect(transformedSource).toBe(sourceMockWithSetup);
});

test('remove imports', () => {
    const transformedSource = removeImport(sourceMock)
    expect(transformedSource).toBe(sourceMockRemovedImports);
//     TODO: Add More Examples
});

test('transform get() to computed', () => {
    const transformedSource = transformGetToComputed(sourceMock)
    // expect(transformedSource).toBe(sourceMockRemovedImports);
});
