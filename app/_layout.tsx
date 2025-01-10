import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import LoginWithGoogle from '@/app/components/LoginWithGoogle';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <LoginWithGoogle />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
