import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function ResetPasswordScreen({ navigation }: any) {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                accessibilityRole="button"
                accessibilityLabel="Go back"
            >
                <Text style={styles.back}>‹ Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Reset Password</Text>

            <Text style={styles.instructions}>
                Enter your email address and we’ll send you a reset link.
            </Text>

            <Text style={styles.label}>Email</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                accessibilityLabel="Email address"
            />

            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}
                accessibilityRole="button"
                accessibilityLabel="Send Reset Link"
            >
                <Text style={styles.buttonText}>Send Reset Link</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingTop: 70,
    },
    back: {
        fontSize: 16,
        color: '#2C67BA',
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
    },
    instructions: {
        fontSize: 16,
        marginBottom: 30,
        lineHeight: 22,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 8,
        padding: 14,
        fontSize: 16,
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#2C67BA',
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});