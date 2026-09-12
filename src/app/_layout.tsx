import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#1976D2',
        tabBarInactiveTintColor: '#78909C',

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName:
            | 'home'
            | 'home-outline'
            | 'calendar'
            | 'calendar-outline'
            | 'medkit'
            | 'medkit-outline'
            | 'person'
            | 'person-outline';

          if (route.name === 'index') {
            iconName = 'home-outline';
          } else if (route.name === 'appointments') {
            iconName = 'calendar-outline';
          } else if (route.name === 'medications') {
            iconName = 'medkit-outline';
          } else {
            iconName = 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="appointments"
        options={{
          title: 'Appointments',
        }}
      />

      <Tabs.Screen
        name="medications"
        options={{
          title: 'Medications',
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
