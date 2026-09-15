import type { PropsWithChildren } from 'react';
import { act, renderHook } from '@testing-library/react-native';

import {
    MedicationProvider,
    useMedicationContext,
} from '../MedicationContext';

function wrapper({ children }: PropsWithChildren) {
    return <MedicationProvider>{children}</MedicationProvider>;
}

describe('MedicationContext', () => {
    test('starts with no medications marked as taken', async () => {
        const { result } = await renderHook(
            () => useMedicationContext(),
            { wrapper }
        );

        expect(result.current.takenMedications).toEqual([]);
    });

    test('marks a medication as taken without adding duplicates', async () => {
        const { result } = await renderHook(
            () => useMedicationContext(),
            { wrapper }
        );

        await act(() => {
            result.current.markAsTaken('Lisinopril');
            result.current.markAsTaken('Lisinopril');
        });

        expect(result.current.takenMedications).toEqual([
            'Lisinopril',
        ]);
    });

    test('resets a medication that was marked as taken', async () => {
        const { result } = await renderHook(
            () => useMedicationContext(),
            { wrapper }
        );

        await act(() => result.current.markAsTaken('Lisinopril'));
        await act(() => result.current.resetMedication('Lisinopril'));

        expect(result.current.takenMedications).toEqual([]);
    });
});
