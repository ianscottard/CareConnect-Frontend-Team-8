import { createContext, useContext, useState, ReactNode } from 'react';
import { addMedication, removeMedication } from '../utils/medicationUtils';

type MedicationContextType = {
    takenMedications: string[];
    markAsTaken: (medicationName: string) => void;
    resetMedication: (medicationName: string) => void;
};

const MedicationContext = createContext<MedicationContextType | undefined>(
    undefined
);

export function MedicationProvider({ children }: { children: ReactNode }) {
    const [takenMedications, setTakenMedications] = useState<string[]>([]);

    const markAsTaken = (medicationName: string) => {
        setTakenMedications((current) =>
            addMedication(current, medicationName)
        );
    };

    const resetMedication = (medicationName: string) => {
        setTakenMedications((current) =>
            removeMedication(current, medicationName)
        );
    };

    return (
        <MedicationContext.Provider
            value={{
                takenMedications,
                markAsTaken,
                resetMedication,
            }}
        >
            {children}
        </MedicationContext.Provider>
    );
}

export function useMedicationContext() {
    const context = useContext(MedicationContext);

    if (!context) {
        throw new Error(
            'useMedicationContext must be used inside a MedicationProvider'
        );
    }

    return context;
}