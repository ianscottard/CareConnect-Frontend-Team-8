import AppNavigator from './app/navigation/AppNavigator';
import { MedicationProvider } from './app/context/MedicationContext';

export default function App() {
  return (
    <MedicationProvider>
      <AppNavigator />
    </MedicationProvider>
  );
}