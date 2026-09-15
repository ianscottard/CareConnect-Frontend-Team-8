import {
    addMedication,
    removeMedication,
} from './medicationUtils';

describe('medication utilities', () => {
    test('adds a medication as taken', () => {
        const result = addMedication([], 'Lisinopril');

        expect(result).toEqual(['Lisinopril']);
    });

    test('does not add the same medication twice', () => {
        const current = ['Lisinopril'];
        const result = addMedication(current, 'Lisinopril');

        expect(result).toBe(current);
        expect(result).toEqual(['Lisinopril']);
    });

    test('removes a medication from taken medications', () => {
        const result = removeMedication(
            ['Lisinopril', 'Fingolimod'],
            'Lisinopril'
        );

        expect(result).toEqual(['Fingolimod']);
    });

    test('leaves the list unchanged when medication is absent', () => {
        const result = removeMedication(
            ['Lisinopril'],
            'Fingolimod'
        );

        expect(result).toEqual(['Lisinopril']);
    });
});
