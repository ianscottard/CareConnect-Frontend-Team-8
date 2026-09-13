/**
 * Type-safe route definitions for the CareConnect native stack.
 *
 * This interface is the default export so screens and navigation helpers can
 * import it consistently while still allowing named type imports if needed.
 */
export default interface RootStackParamList {
  Login: undefined;
  ResetPassword: undefined;
  Home: undefined;
  Appointments: undefined;
  Medications: undefined;
  Messages: undefined;
  NewMessage: undefined;
  DoctorMessaging: undefined;
  Profile: undefined;
}
