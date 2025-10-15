import { Stack } from 'expo-router';
import { AuthProvider, useAuth } from '@/hooks/use-auth';
import { COLORS } from '@/constants/colors';

function ProtectedStack() {
  const { user } = useAuth();

  return (
    <Stack
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: COLORS.primary },
        headerTitleStyle: { fontWeight: '700' },
        contentStyle: { backgroundColor: '#fff' },
        headerShown: true,
      }}
    >
      {!user ? (
        <Stack.Screen name="login" options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="index" options={{ title: 'Home' }} />
          <Stack.Screen name="user/index" options={{ title: 'Profile' }} />
          <Stack.Screen name="user/[id]" options={{ title: 'User Detail' }} />
          <Stack.Screen name="product/index" options={{ title: 'Product List' }} />
        </>
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProtectedStack />
    </AuthProvider>
  );
}

