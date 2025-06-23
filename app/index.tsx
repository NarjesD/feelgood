// fil: app/(tabs)/index.tsx

import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import LoginForm from "@/components/LoginForm"; 

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <LoginForm />
      </ThemedView>

      <ThemedView style={styles.linkContainer}>
        <Link href="/about" style={styles.link}>
          About us
        </Link>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  linkContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  link: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#1E90FF',
  },
});
