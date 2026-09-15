import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type RootStackParamList from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          accessibilityLabel="Email address"
          placeholder="E-mail"
        />
        <View style={styles.passwordWrap}>
          <TextInput
            style={styles.passwordInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
            accessibilityLabel="Password"
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.eye}
            onPress={() => setPasswordVisible((v) => !v)}
            accessibilityRole="button"
            accessibilityLabel={passwordVisible ? 'Hide password' : 'Show password'}
          >
            <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={23} color="#333" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate('ResetPassword')}
          accessibilityRole="button"
          accessibilityLabel="Forgot password"
        >
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.replace('Home')}
          accessibilityRole="button"
          accessibilityLabel="Login"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  form: { paddingHorizontal: 32, paddingTop: 220 },
  input: { height: 50, borderWidth: 1, borderColor: '#777', borderRadius: 4, paddingHorizontal: 14, fontSize: 16, marginBottom: 20 },
  passwordWrap: { position: 'relative', marginBottom: 8 },
  passwordInput: { height: 50, borderWidth: 1, borderColor: '#777', borderRadius: 4, paddingHorizontal: 14, paddingRight: 48, fontSize: 16 },
  eye: { position: 'absolute', right: 10, top: 12, padding: 2 },
  forgot: { alignSelf: 'flex-end', minHeight: 40, justifyContent: 'center' },
  forgotText: { color: '#2C67BA', fontSize: 14, fontWeight: '500' },
  loginButton: { height: 48, backgroundColor: '#2C67BA', borderRadius: 4, alignItems: 'center', justifyContent: 'center', marginTop: 12 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});
