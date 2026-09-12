import { Ionicons } from '@expo/vector-icons';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProfileScreen() {
  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: () => {},
        },
      ],
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={45}
            color="#1976D2"
          />
        </View>

        <Text style={styles.name}>
          Patient
        </Text>

        <Text style={styles.email}>
          vindh@gmail.com
        </Text>
      </View>

      <View style={styles.infoCard}>
        <ProfileItem
          icon="person-outline"
          title="Full Name"
          value="Patient"
        />

        <ProfileItem
          icon="mail-outline"
          title="Email"
          value="vind@gmail.com"
        />

        <ProfileItem
          icon="call-outline"
          title="Phone"
          value="225-299-8909"
        />

        <ProfileItem
          icon="calendar-outline"
          title="Date of Birth"
          value="15 August 1995"
        />
      </View>

      <TouchableOpacity
        style={styles.editButton}
        accessibilityLabel="Edit profile"
        onPress={() => {}}
      >
        <Ionicons
          name="create-outline"
          size={20}
          color="#FFFFFF"
        />

        <Text style={styles.editText}>
          Edit Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        accessibilityLabel="Logout"
        onPress={logout}
      >
        <Ionicons
          name="log-out-outline"
          size={20}
          color="#1976D2"
        />

        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function ProfileItem({icon, title, value}) {
  return (
    <View style={styles.item}>
      <Ionicons
        name={icon}
        size={23}
        color="#1976D2"
      />

      <View style={styles.itemText}>
        <Text style={styles.itemTitle}>
          {title}
        </Text>

        <Text style={styles.itemValue}>
          {value}
        </Text>
      </View>
    </View>
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
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    elevation: 2,
    marginBottom: 18,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: 21,
    fontWeight: '700',
    color: '#263238',
    marginTop: 12,
  },

  email: {
    color: '#78909C',
    marginTop: 5,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    elevation: 2,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ECEFF1',
  },

  itemText: {
    marginLeft: 15,
  },

  itemTitle: {
    color: '#78909C',
    fontSize: 12,
  },

  itemValue: {
    color: '#263238',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 3,
  },

  editButton: {
    backgroundColor: '#1976D2',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  editText: {
    color: '#FFFFFF',
    fontWeight: '700',
    marginLeft: 8,
  },

  logoutButton: {
    borderWidth: 1,
    borderColor: '#1976D2',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 20,
  },

  logoutText: {
    color: '#1976D2',
    fontWeight: '700',
    marginLeft: 8,
  },
});
