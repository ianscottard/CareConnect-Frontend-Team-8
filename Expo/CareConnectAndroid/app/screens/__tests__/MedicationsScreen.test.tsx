import { fireEvent, render, screen, waitFor } from '@testing-library/react-native';
import MedicationsScreen from '../MedicationsScreen';
import { MedicationProvider } from '../../context/MedicationContext';

describe('MedicationsScreen', () => {
    test('displays the medications', async () => {
        const navigation = {
            navigate: jest.fn(),
        } as any;

        await render(
            <MedicationProvider>
                <MedicationsScreen
                    navigation={navigation}
                    route={{} as any}
                />
            </MedicationProvider>
        );

        expect(screen.getByText('Lisinopril')).toBeTruthy();
        expect(screen.getByText('Fingolimod')).toBeTruthy();
        expect(screen.getByText('Aspirin')).toBeTruthy();
    });
});

test('marks Lisinopril as taken', async () => {
    const navigation = {
        navigate: jest.fn(),
    } as any;

    await render(
        <MedicationProvider>
            <MedicationsScreen
                navigation={navigation}
                route={{} as any}
            />
        </MedicationProvider>
    );

    await fireEvent.press(
        screen.getByLabelText('Mark Lisinopril as taken')
    );

    await waitFor(() => {
        expect(
            screen.queryByLabelText('Mark Lisinopril as taken')
        ).toBeNull();
    });
});

test('filters medications by name without regard to capitalization', async () => {
    const navigation = { navigate: jest.fn() } as any;

    await render(
        <MedicationProvider>
            <MedicationsScreen
                navigation={navigation}
                route={{} as any}
            />
        </MedicationProvider>
    );

    await fireEvent.changeText(
        screen.getByLabelText('Search medications'),
        'LISIN'
    );

    expect(screen.getByText('Lisinopril')).toBeTruthy();
    expect(screen.queryByText('Fingolimod')).toBeNull();
});

test('filters medications by dosage', async () => {
    const navigation = { navigate: jest.fn() } as any;

    await render(
        <MedicationProvider>
            <MedicationsScreen
                navigation={navigation}
                route={{} as any}
            />
        </MedicationProvider>
    );

    await fireEvent.changeText(
        screen.getByLabelText('Search medications'),
        '0.5 mg'
    );

    expect(screen.getByText('Fingolimod')).toBeTruthy();
    expect(screen.queryByText('Lisinopril')).toBeNull();
});
