import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function DashboardScreen({navigation}) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Patient</Text>
          <Text style={styles.subtitle}>
            How are you feeling today?
          </Text>
        </View>

        <TouchableOpacity
          accessibilityLabel="Open profile"
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons
            name="person-circle-outline"
            size={44}
            color="#1976D2"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.welcomeCard}>
        <View style={styles.welcomeIcon}>
          <Ionicons
            name="heart"
            size={32}
            color="#FFFFFF"
          />
        </View>

        <View style={styles.welcomeText}>
          <Text style={styles.welcomeTitle}>
            Stay healthy!
          </Text>

          <Text style={styles.welcomeSubtitle}>
            Keep track of your appointments and medications.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>
        Quick Access
      </Text>

      <View style={styles.grid}>
        <TouchableOpacity
          style={styles.card}
          accessibilityLabel="Open appointments"
          onPress={() => navigation.navigate('Appointments')}
        >
          <Ionicons
            name="calendar"
            size={32}
            color="#1976D2"
          />

          <Text style={styles.cardTitle}>
            Appointments
          </Text>

          <Text style={styles.cardSubtitle}>
            2 upcoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          accessibilityLabel="Open medications"
          onPress={() => navigation.navigate('Medications')}
        >
          <Ionicons
            name="medkit"
            size={32}
            color="#00897B"
          />

          <Text style={styles.cardTitle}>
            Medications
          </Text>

          <Text style={styles.cardSubtitle}>
            3 medicines
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        Next Appointment
      </Text>

      <View style={styles.appointmentCard}>
        <View style={styles.doctorIcon}>
          <Ionicons
            name="person"
            size={28}
            color="#1976D2"
          />
        </View>

        <View style={styles.appointmentInfo}>
          <Text style={styles.doctorName}>
            Dr. Sarah Collins
          </Text>

          <Text style={styles.speciality}>
            Cardiologist
          </Text>

          <Text style={styles.date}>
            📅 15 September 2026
          </Text>

          <Text style={styles.time}>
            🕐 10:30 AM
          </Text>
        </View>
      </View>
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

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },

  greeting: {
    fontSize: 26,
    fontWeight: '700',
    color: '#263238',
  },

  subtitle: {
    marginTop: 5,
    fontSize: 15,
    color: '#78909C',
  },

  welcomeCard: {
    backgroundColor: '#1976D2',
    borderRadius: 18,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  welcomeIcon: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  welcomeText: {
    flex: 1,
  },

  welcomeTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },

  welcomeSubtitle: {
    color: '#E3F2FD',
    fontSize: 13,
    marginTop: 5,
    lineHeight: 19,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    minHeight: 135,
    justifyContent: 'center',
    elevation: 2,
  },

  cardTitle: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '700',
    color: '#263238',
  },

  cardSubtitle: {
    marginTop: 5,
    color: '#78909C',
    fontSize: 13,
  },

  appointmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    marginBottom: 20,
    elevation: 2,
  },

  doctorIcon: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  appointmentInfo: {
    flex: 1,
  },

  doctorName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#263238',
  },

  speciality: {
    color: '#78909C',
    marginTop: 3,
    marginBottom: 10,
  },

  date: {
    fontSize: 13,
    color: '#455A64',
  },

  time: {
    fontSize: 13,
    color: '#455A64',
    marginTop: 4,
  },
});
