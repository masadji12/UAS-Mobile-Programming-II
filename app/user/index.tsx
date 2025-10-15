import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router, Stack } from 'expo-router';
import { users } from '@/data/mock-data';
import { SPACING } from '@/constants/spacing';

export default function UserListScreen() {
  return (
    <>
    <Stack.Screen options={{title: 'User List'}} />
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push({ pathname: '/user/[id]', params: { id: item.id } })}
            >
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: SPACING.sm }} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACING.lg },
  card: { borderWidth: 1, borderRadius: 12, padding: SPACING.md, borderColor: '#e5e7eb' },
  name: { fontWeight: '700' },
  email: { color: '#6b7280', marginTop: 4 },
});
