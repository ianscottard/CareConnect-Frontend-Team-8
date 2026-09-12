import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Patient</Text>
            <Text style={styles.subtitle}>
              How are you feeling today?
            </Text>
          </View>

          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Open profile"
            onPress={() => router.push('/profile')}
            style={styles.profileButton}
          >
            <Ionicons
              name="person-circle-outline"
              size={46}
              color="#1976D2"
            />
          </TouchableOpacity>
        </View>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <View style={styles.heartCircle}>
            <Ionicons
              name="heart"
              size={30}
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

        {/* Quick Access */}
        <Text style={styles.sectionTitle}>
          Quick Access
        </Text>

        <View style={styles.cardRow}>
          {/* Appointments */}
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Open appointments"
            style={styles.quickCard}
            onPress={() => router.push('/appointments')}
          >
            <View style={styles.blueIcon}>
              <Ionicons
                name="calendar"
                size={30}
                color="#1976D2"
              />
            </View>

            <Text style={styles.cardTitle}>
              Appointments
            </Text>

            <Text style={styles.cardSubtitle}>
              2 upcoming
            </Text>
          </TouchableOpacity>

          {/* Medications */}
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Open medications"
            style={styles.quickCard}
            onPress={() => router.push('/medications')}
          >
            <View style={styles.greenIcon}>
              <Ionicons
                name="medkit"
                size={30}
                color="#00897B"
              />
            </View>

            <Text style={styles.cardTitle}>
              Medications
            </Text>

            <Text style={styles.cardSubtitle}>
              3 medicines
            </Text>
          </TouchableOpacity>
        </View>

        {/* Next Appointment */}
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

            <View style={styles.detailRow}>
              <Ionicons
                name="calendar-outline"
                size={16}
                color="#546E7A"
              />
              <Text style={styles.detailText}>
                15 September 2026
              </Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons
                name="time-outline"
                size={16}
                color="#546E7A"
              />
              <Text style={styles.detailText}>
                10:30 AM
              </Text>
            </View>
          </View>
        </View>

        {/* Health Tip */}
        <View style={styles.tipCard}>
          <Ionicons
            name="bulb-outline"
            size={24}
            color="#1976D2"
          />

          <View style={styles.tipText}>
            <Text style={styles.tipTitle}>
              Health Tip
            </Text>

            <Text style={styles.tipDescription}>
              Remember to stay hydrated and take your
              medications on time.
            </Text>
          </View>
        </View>
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
    fontSize: 15,
    color: '#78909C',
    marginTop: 5,
  },

  profileButton: {
    padding: 2,
  },

  welcomeCard: {
    backgroundColor: '#1976D2',
    borderRadius: 18,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },

  heartCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(255,255,255,0.20)',
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
    lineHeight: 19,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 14,
  },

  cardRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },

  quickCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    minHeight: 145,
    justifyContent: 'center',
    elevation: 2,
  },

  blueIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  greenIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#263238',
    marginTop: 12,
  },

  cardSubtitle: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 5,
  },

  appointmentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    elevation: 2,
    marginBottom: 20,
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
    marginBottom: 9,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  detailText: {
    fontSize: 13,
    color: '#455A64',
    marginLeft: 6,
  },

  tipCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  tipText: {
    flex: 1,
    marginLeft: 12,
  },

  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1976D2',
  },

  tipDescription: {
    fontSize: 13,
    color: '#455A64',
    lineHeight: 19,
    marginTop: 4,
  },
});
