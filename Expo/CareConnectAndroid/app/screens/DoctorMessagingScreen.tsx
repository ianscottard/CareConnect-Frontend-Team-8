import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type RootStackParamList from '../navigation/types';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'DoctorMessaging'
>;

export default function DoctorMessagingScreen({ navigation }: Props) {
  const [message, setMessage] = useState('');

  const send = () => {
    if (message.trim()) {
      setMessage('');
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            accessibilityRole="button"
            accessibilityLabel="Back to messages"
          >
            <Ionicons
              name="arrow-back"
              size={26}
              color="#2C67BA"
            />
          </TouchableOpacity>

          <View style={styles.doctorInfo}>
            <Text style={styles.doctor}>
              Dr. Sarah Smith
            </Text>
            <Text style={styles.specialty}>
              Neurology
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <ScrollView contentContainerStyle={styles.conversation}>
          <View style={styles.received}>
            <Text style={styles.messageText}>
              Your test results are ready, please let me know if you have
              any questions.
            </Text>
          </View>

          <View style={styles.sent}>
            <Text style={styles.sentText}>
              Thank you, Dr. Smith. I have a question but prefer to
              discuss it during the upcoming visit.
            </Text>
          </View>
        </ScrollView>

        <View style={styles.composer}>
          <TouchableOpacity
            onPress={() => { }}
            accessibilityRole="button"
            accessibilityLabel="Attach file"
          >
            <Ionicons
              name="attach"
              size={24}
              color="#000"
            />
          </TouchableOpacity>

          <TextInput
            style={styles.composeInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Type a message..."
            multiline
            accessibilityLabel="Type a message"
          />

          <TouchableOpacity
            onPress={send}
            accessibilityRole="button"
            accessibilityLabel="Send message"
          >
            <Ionicons
              name="send-outline"
              size={25}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },

  backButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  doctorInfo: {
    marginLeft: 8,
  },

  doctor: {
    fontSize: 17,
    fontWeight: '600',
    color: '#2C67BA',
  },

  specialty: {
    fontSize: 14,
    color: '#222',
  },

  divider: {
    height: 1,
    backgroundColor: '#DDD',
  },

  conversation: {
    paddingHorizontal: 32,
    paddingVertical: 40,
  },

  received: {
    alignSelf: 'flex-start',
    maxWidth: 230,
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  sent: {
    alignSelf: 'flex-end',
    maxWidth: 250,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#2C67BA',
    marginTop: 28,
  },

  messageText: {
    fontSize: 16,
    lineHeight: 21,
  },

  sentText: {
    fontSize: 16,
    lineHeight: 21,
    color: '#FFF',
  },

  composer: {
    minHeight: 68,
    borderWidth: 1,
    borderColor: '#555',
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  composeInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 8,
    maxHeight: 100,
  },
});
