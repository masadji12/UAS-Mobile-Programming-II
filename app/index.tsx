import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import PrimaryButton from '@/components/button-primary';
import { useAuth } from '@/hooks/use-auth';
import { SPACING } from '@/constants/spacing';

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <>
    <Stack.Screen options={{title: "Home"}}/>
      <View style={styles.container}>
        <Text style={styles.title}>Halo, {user?.name}</Text>
        <Text style={styles.caption}>Silakan pilih menu</Text>

        <Link href="/user"  asChild>
          <PrimaryButton title="User List" />
        </Link>

        <View style={{ height: SPACING.sm }} />

        <Link href="/product" asChild>
          <PrimaryButton title="Product List" variant="outline" />
        </Link>

        <View style={{ height: SPACING.lg }} />

        <PrimaryButton title="Logout" variant="danger" onPress={logout} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACING.lg },
  title: { fontSize: 22, fontWeight: '700' },
  caption: { marginTop: 6, marginBottom: SPACING.lg, color: '#6b7280' },
});
