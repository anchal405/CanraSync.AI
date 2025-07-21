import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreenLib from 'expo-splash-screen'; // Rename here

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await SplashScreenLib.hideAsync(); // Use renamed import
        router.replace('/OnboardingScreen');
      } catch (err) {
        console.warn('Splash screen error:', err);
      }
    };

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/placeholder.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>Welcome to CanaraSync.AI</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
