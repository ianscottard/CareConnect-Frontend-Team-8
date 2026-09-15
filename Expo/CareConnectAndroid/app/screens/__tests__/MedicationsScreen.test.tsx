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

    fireEvent.press(
        screen.getByLabelText('Mark Lisinopril as taken')
    );

    await waitFor(() => {
        expect(
            screen.queryByLabelText('Mark Lisinopril as taken')
        ).toBeNull();
    });
});