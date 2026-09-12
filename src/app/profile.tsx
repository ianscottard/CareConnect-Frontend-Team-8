import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const [name, setName] = useState('Patient');
  const [email, setEmail] = useState('vindh@gmail.com');
  const [phone, setPhone] = useState('225-299-8909');
  const [editing, setEditing] = useState(false);

  const saveProfile = () => {
    setEditing(false);

    Alert.alert(
      'Profile Updated',
      'Your profile has been updated successfully.',
    );
  };

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
          style: 'destructive',
          onPress: () => {
            Alert.alert('Logged Out', 'You have been logged out.');
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Profile</Text>

        {/* Profile Header */}
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons
              name="person"
              size={46}
              color="#1976D2"
            />
          </View>

          <Text style={styles.profileName}>
            {name}
          </Text>

          <Text style={styles.profileEmail}>
            {email}
          </Text>
        </View>

        {/* Personal Information */}
        <Text style={styles.sectionTitle}>
          Personal Information
        </Text>

        <View style={styles.infoCard}>
          {editing ? (
            <>
              <InputField
                icon="person-outline"
                label="Full Name"
                value={name}
                onChangeText={setName}
              />

              <InputField
                icon="mail-outline"
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />

              <InputField
                icon="call-outline"
                label="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </>
          ) : (
            <>
              <ProfileItem
                icon="person-outline"
                title="Full Name"
                value={name}
              />

              <ProfileItem
                icon="mail-outline"
                title="Email"
                value={email}
              />

              <ProfileItem
                icon="call-outline"
                title="Phone"
                value={phone}
              />

              <ProfileItem
                icon="calendar-outline"
                title="Date of Birth"
                value="15 August 1990"
              />
            </>
          )}
        </View>

        {/* Edit / Save */}
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={
            editing ? 'Save profile' : 'Edit profile'
          }
          style={styles.editButton}
          onPress={editing ? saveProfile : () => setEditing(true)}
        >
          <Ionicons
            name={editing ? 'checkmark-outline' : 'create-outline'}
            size={21}
            color="#FFFFFF"
          />

          <Text style={styles.editText}>
            {editing ? 'Save Profile' : 'Edit Profile'}
          </Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Logout"
          style={styles.logoutButton}
          onPress={logout}
        >
          <Ionicons
            name="log-out-outline"
            size={21}
            color="#1976D2"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileItem({
  icon,
  title,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value: string;
}) {
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

function InputField({
  icon,
  label,
  value,
  onChangeText,
  keyboardType,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address' | 'phone-pad';
}) {
  return (
    <View style={styles.inputContainer}>
      <Ionicons
        name={icon}
        size={22}
        color="#1976D2"
      />

      <TextInput
        accessibilityLabel={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={label}
        keyboardType={keyboardType}
      />
    </View>
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
    paddingBottom: 35,
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
    elevation: 3,
    marginBottom: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileName: {
    fontSize: 21,
    fontWeight: '700',
    color: '#263238',
    marginTop: 12,
  },

  profileEmail: {
    color: '#78909C',
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#263238',
    marginBottom: 14,
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
    paddingVertical: 15,
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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CFD8DC',
    paddingVertical: 8,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#263238',
    marginLeft: 12,
    paddingVertical: 5,
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
  },

  logoutText: {
    color: '#1976D2',
    fontWeight: '700',
    marginLeft: 8,
  },
});
