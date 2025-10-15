import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import { products } from '@/data/mock-data';
import { SPACING } from '@/constants/spacing';

export default function ProductListScreen() {
  const renderItem = ({ item }: any) => (
    <>
      <Stack.Screen options={{title: "List Product"}} />
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.rowBetween}>
          <Text>ID: {item.id}</Text>
          <Text>Stock: {item.stock}</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text>Harga: Rp{item.price.toLocaleString('id-ID')}</Text>
        </View>
        <Text style={{ marginTop: 4 }}>{item.createdAt}</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: SPACING.sm }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: SPACING.lg },
  card: { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 12, padding: SPACING.md, backgroundColor: '#f9fafb' },
  title: { fontWeight: '700' },
  desc: { color: '#6b7280', marginTop: 6 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginTop: SPACING.sm },
});
