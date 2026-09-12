import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const medications = [
  {
    name: 'Amlodipine',
    dosage: '5 mg',
    time: '08:00 AM',
    frequency: 'Once daily',
  },
  {
    name: 'Metformin',
    dosage: '500 mg',
    time: '01:00 PM',
    frequency: 'Once daily',
  },
  {
    name: 'Atorvastatin',
    dosage: '20 mg',
    time: '09:00 PM',
    frequency: 'Once daily',
  },
];

export default function MedicationsScreen() {
  const [taken, setTaken] = useState<Record<string, boolean>>({});

  const toggleMedication = (name: string) => {
    setTaken((previous) => ({
      ...previous,
      [name]: !previous[name],
    }));
  };

  const takenCount = medications.filter(
    (medicine) => taken[medicine.name],
  ).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Medications</Text>

        <Text style={styles.subtitle}>
          Keep track of your daily medicines
        </Text>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressIcon}>
            <Ionicons
              name="medical"
              size={28}
              color="#FFFFFF"
            />
          </View>

          <View style={styles.progressInfo}>
            <Text style={styles.progressTitle}>
              Today's Progress
            </Text>

            <Text style={styles.progressText}>
              {takenCount} of {medications.length} medications taken
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Today's Medications
        </Text>

        {medications.map((medicine) => {
          const isTaken = taken[medicine.name] === true;

          return (
            <View
              key={medicine.name}
              style={[
                styles.card,
                isTaken && styles.cardTaken,
              ]}
            >
              <View style={styles.medicineIcon}>
                <Ionicons
                  name="medkit"
                  size={27}
                  color="#1976D2"
                />
              </View>

              <View style={styles.medicineInfo}>
                <Text style={styles.medicineName}>
                  {medicine.name}
                </Text>

                <Text style={styles.dosage}>
                  Dosage: {medicine.dosage}
                </Text>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="time-outline"
                    size={16}
                    color="#546E7A"
                  />

                  <Text style={styles.detailText}>
                    {medicine.time}
                  </Text>
                </View>

                <Text style={styles.frequency}>
                  {medicine.frequency}
                </Text>
              </View>

              <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel={
                  isTaken
                    ? `${medicine.name} already taken`
                    : `Mark ${medicine.name} as taken`
                }
                style={[
                  styles.takeButton,
                  isTaken && styles.takenButton,
                ]}
                onPress={() =>
                  toggleMedication(medicine.name)
                }
              >
                <Ionicons
                  name={isTaken ? 'checkmark' : 'add'}
                  size={21}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
            </View>
          );
        })}

        {/* Reminder */}
        <View style={styles.reminderCard}>
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="#1976D2"
          />

          <View style={styles.reminderText}>
            <Text style={styles.reminderTitle}>
              Medication Reminder
            </Text>

            <Text style={styles.reminderDescription}>
              Take your medicines at the prescribed time
              every day.
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

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#263238',
  },

  subtitle: {
    fontSize: 15,
    color: '#78909C',
    marginTop: 6,
    marginBottom: 20,
  },

  progressCard: {
    backgroundColor: '#1976D2',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },

  progressIcon: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  progressInfo: {
    flex: 1,
  },

  progressTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  progressText: {
    color: '#E0F2F1',
    fontSize: 13,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 14,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
  },

  cardTaken: {
    opacity: 0.75,
  },

  medicineIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E0F2F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  medicineInfo: {
    flex: 1,
  },

  medicineName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#263238',
  },

  dosage: {
    fontSize: 13,
    color: '#78909C',
    marginTop: 4,
  },

  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  detailText: {
    fontSize: 13,
    color: '#455A64',
    marginLeft: 5,
  },

  frequency: {
    fontSize: 12,
    color: '#78909C',
    marginTop: 3,
  },

  takeButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  takenButton: {
    backgroundColor: '#1976D2',
  },

  reminderCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },

  reminderText: {
    flex: 1,
    marginLeft: 12,
  },

  reminderTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1976D2',
  },

  reminderDescription: {
    fontSize: 13,
    lineHeight: 19,
    color: '#455A64',
    marginTop: 4,
  },
});
