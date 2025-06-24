import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Fliknavigeringen från mappen (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Fler stack-skärmar kan läggas till här */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
