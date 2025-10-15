import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import PrimaryButton from '@/components/button-primary';
import { COLORS } from '@/constants/colors';
import { SPACING } from '@/constants/spacing';
import { useAuth } from '@/hooks/use-auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('budi@example.com');
  const [password, setPassword] = useState('123456');
  const { login } = useAuth();

  const handleSubmit = () => {
    const res = login(email, password);
    if (!res.ok) return Alert.alert('Login gagal', res.message);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/profile.png')} style={styles.logo} />
      <Text style={styles.title}>UAS Mobile Programming II</Text>

      <View style={styles.group}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="••••••"
        />
      </View>

      <PrimaryButton title="Login" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACING.lg, justifyContent: 'center' },
  logo: { width: 96, height: 96, alignSelf: 'center', marginBottom: SPACING.lg },
  title: { fontSize: 18, fontWeight: '700', textAlign: 'center', marginBottom: SPACING.lg, color: COLORS.text },
  group: { marginBottom: SPACING.md },
  label: { marginBottom: 6, color: COLORS.text },
  input: {
    borderWidth: 1, borderColor: COLORS.gray300, borderRadius: 12,
    paddingHorizontal: SPACING.md, paddingVertical: SPACING.sm, backgroundColor: COLORS.gray100,
  },
});
