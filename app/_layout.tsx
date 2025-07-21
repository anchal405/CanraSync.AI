// app/_layout.tsx
import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';

// 👉 Prevent auto-hiding splash screen immediately
SplashScreen.preventAutoHideAsync().catch(() => {
  /* Already hidden or failed */
});

export default function RootLayout() {
  useEffect(() => {
    // We won't hide splash here — SplashScreen.tsx will do it manually
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="SplashScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnboardingScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConsentScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HistoryScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QRScreen"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardsScreen"
          options={{ headerShown: false }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
