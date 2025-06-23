import { StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">This page is not found.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">Go back to the landingpage</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  link: {
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
