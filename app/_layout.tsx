import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Laddar in din tab-navigering från mappen (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
