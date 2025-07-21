// app/index.tsx
import React from 'react';
import { Redirect } from 'expo-router';

export default function AppEntry() {
  // This file is the root entry of your app
  // It simply redirects to your custom splash screen
  return <Redirect href="/SplashScreen" />;
}
