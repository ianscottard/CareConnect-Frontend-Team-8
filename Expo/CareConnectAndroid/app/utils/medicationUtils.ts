export function addMedication(
    current: string[],
    medicationName: string
): string[] {
    return current.includes(medicationName)
        ? current
        : [...current, medicationName];
}

export function removeMedication(
    current: string[],
    medicationName: string
): string[] {
    return current.filter((name) => name !== medicationName);
}