import { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { users } from '@/data/mock-data';
import { SPACING } from '@/constants/spacing';

export default function UserDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const user = useMemo(() => users.find(u => u.id === String(id)), [id]);

  if (!user) return <View style={{ padding: SPACING.lg }}><Text>User tidak ditemukan.</Text></View>;

  return (
    <>
      <Stack.Screen options={{title: 'Detail User'}}/>
      <View style={styles.container}>
        {[
          ['ID', user.id],
          ['Nama', user.name],
          ['Email', user.email],
          ['Tanggal dibuat', user.createdAt],
          ['Password', user.password]
        ].map(([label, value]) => (
          <View key={label} style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACING.lg },
  row: { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: SPACING.md, marginBottom: SPACING.sm },
  label: { color: '#6b7280', fontSize: 12 },
  value: { fontWeight: '700', marginTop: 4 },
});
