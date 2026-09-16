import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const appointments = [
  {
    doctor: 'Dr. Sarah Collins',
    speciality: 'Cardiologist',
    date: '15 September 2026',
    time: '10:30 AM',
  },
  {
    doctor: 'Dr. Oswald Lee',
    speciality: 'General Physician',
    date: '20 September 2026',
    time: '02:00 PM',
  },
];

export default function AppointmentsScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Appointments</Text>

      <Text style={styles.subtitle}>
        Your upcoming appointments
      </Text>

      {appointments.map((appointment, index) => (
        <View
          style={styles.appointmentCard}
          key={index}
        >
          <View style={styles.iconContainer}>
            <Ionicons
              name="calendar"
              size={28}
              color="#1976D2"
            />
          </View>

          <View style={styles.details}>
            <Text style={styles.doctor}>
              {appointment.doctor}
            </Text>

            <Text style={styles.speciality}>
              {appointment.speciality}
            </Text>

            <Text style={styles.info}>
              📅 {appointment.date}
            </Text>

            <Text style={styles.info}>
              🕐 {appointment.time}
            </Text>

            <TouchableOpacity
              style={styles.button}
              accessibilityLabel={`View appointment with ${appointment.doctor}`}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  content: {
    padding: 20,
    paddingTop: 55,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#263238',
  },

  subtitle: {
    color: '#78909C',
    marginTop: 6,
    marginBottom: 24,
  },

  appointmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    flexDirection: 'row',
    elevation: 2,
  },

  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  details: {
    flex: 1,
  },

  doctor: {
    fontSize: 17,
    fontWeight: '700',
    color: '#263238',
  },

  speciality: {
    color: '#78909C',
    marginVertical: 5,
  },

  info: {
    fontSize: 13,
    color: '#455A64',
    marginTop: 3,
  },

  button: {
    backgroundColor: '#1976D2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    marginTop: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

