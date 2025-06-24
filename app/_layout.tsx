import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Fliknavigeringen från mappen (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Lägg till fler stack-skärmar här om du vill */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
