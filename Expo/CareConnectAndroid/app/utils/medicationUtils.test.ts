import {
    addMedication,
    removeMedication,
} from './medicationUtils';

describe('medication utilities', () => {
    test('adds a medication as taken', () => {
        const result = addMedication([], 'Lisinopril');

        expect(result).toEqual(['Lisinopril']);
    });

    test('removes a medication from taken medications', () => {
        const result = removeMedication(
            ['Lisinopril', 'Fingolimod'],
            'Lisinopril'
        );

        expect(result).toEqual(['Fingolimod']);
    });
});
