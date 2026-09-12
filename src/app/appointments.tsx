import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const appointments = [
  {
    doctor: 'Dr. Sarah Collins',
    speciality: 'Cardiologist',
    date: '15 September 2026',
    time: '10:30 AM',
    type: 'In-person',
  },
  {
    doctor: 'Dr. Oswald Lee',
    speciality: 'General Physician',
    date: '20 September 2026',
    time: '02:00 PM',
    type: 'Video consultation',
  },
];

export default function AppointmentsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Appointments</Text>

        <Text style={styles.subtitle}>
          Your upcoming appointments
        </Text>

        {appointments.map((appointment, index) => (
          <View
            key={index}
            style={styles.card}
          >
            <View style={styles.topRow}>
              <View style={styles.doctorIcon}>
                <Ionicons
                  name="person"
                  size={28}
                  color="#1976D2"
                />
              </View>

              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>
                  {appointment.doctor}
                </Text>

                <Text style={styles.speciality}>
                  {appointment.speciality}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Ionicons
                name="calendar-outline"
                size={20}
                color="#1976D2"
              />

              <Text style={styles.detailText}>
                {appointment.date}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons
                name="time-outline"
                size={20}
                color="#1976D2"
              />

              <Text style={styles.detailText}>
                {appointment.time}
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons
                name="medical-outline"
                size={20}
                color="#00897B"
              />

              <Text style={styles.detailText}>
                {appointment.type}
              </Text>
            </View>

            <TouchableOpacity
              accessibilityRole="button"
              accessibilityLabel={`View appointment with ${appointment.doctor}`}
              style={styles.button}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>
                View Details
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  container: {
    flex: 1,
  },

  content: {
    padding: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#263238',
  },

  subtitle: {
    fontSize: 15,
    color: '#78909C',
    marginTop: 6,
    marginBottom: 24,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  doctorIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  doctorInfo: {
    flex: 1,
  },

  doctorName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#263238',
  },

  speciality: {
    fontSize: 14,
    color: '#78909C',
    marginTop: 4,
  },

  divider: {
    height: 1,
    backgroundColor: '#ECEFF1',
    marginVertical: 16,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  detailText: {
    fontSize: 14,
    color: '#455A64',
    marginLeft: 10,
  },

  button: {
    backgroundColor: '#1976D2',
    borderRadius: 11,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});


