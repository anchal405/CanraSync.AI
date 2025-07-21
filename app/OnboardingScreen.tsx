// app/OnboardingScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Icons ke liye

const OnboardingScreen = () => {
  const router = useRouter();

  const handleStart = () => {
    // Navigate to the User Setup / Login screen
    router.replace('/SignUpScreen'); // Replace to prevent going back to onboarding
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      style={styles.scrollView}
    >
      <View style={styles.innerContainer}>
        {' '}
        {/* Renamed 'container' to 'innerContainer' to avoid confusion */}
        {/* Top Section: App Logo, Main Title, Tagline */}
        <View style={styles.headerSection}>
          {/* App Logo Placeholder */}
          <View style={styles.appLogoPlaceholder}>
            {/* Real logo image can be placed here later */}
            <Image
              source={require('../assets/placeholder.png')} // Assuming this is your app logo
              style={styles.appLogoImage}
              resizeMode="contain"
            />
          </View>

          {/* Main Title */}
          <Text style={styles.mainTitle}>Welcome to CanaraSync.AI</Text>

          {/* Tagline */}
          <Text style={styles.tagline}>
            Security that syncs with your every move.
          </Text>
        </View>
        {/* Middle Section: Key Points */}
        <View style={styles.middleSection}>
          {/* Key Points Container */}
          <View style={styles.featureContainer}>
            {/* Point 1: Invisible Protection */}
            <View style={styles.featureItem}>
              <Ionicons
                name="eye-outline"
                size={24}
                color="#0056B3"
                style={styles.featureIcon}
              />
              <Text style={styles.featureText}>
                <Text style={styles.boldText}>Invisible Protection:</Text> Your
                unique digital habits create an invisible shield.
              </Text>
            </View>

            {/* Point 2: Effortless Security */}
            <View style={styles.featureItem}>
              <MaterialCommunityIcons
                name="lock-open-outline"
                size={24}
                color="#0056B3"
                style={styles.featureIcon}
              />
              <Text style={styles.featureText}>
                <Text style={styles.boldText}>Effortless Security:</Text> No
                more passwords or complex verifications needed.
              </Text>
            </View>

            {/* Point 3: Real-time Trust */}
            <View style={styles.featureItem}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#0056B3"
                style={styles.featureIcon}
              />
              <Text style={styles.featureText}>
                <Text style={styles.boldText}>Real-time Trust:</Text> Instant
                alerts for any unusual activity. Trust built on your behavior.
              </Text>
            </View>
          </View>
        </View>
        {/* Bottom Section: Get Started Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#E6F2FF', // Light blue background, professional look
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40, // Add vertical padding for scrollable content
    paddingHorizontal: 24,
  },
  innerContainer: {
    // New style definition for the inner View
    width: '100%', // Ensure it takes full width within scrollContainer
    alignItems: 'center', // Keep content centered horizontally
  },
  headerSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  appLogoPlaceholder: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 50, // Make it circular if your logo is circular
    overflow: 'hidden', // Ensure image stays within bounds
    backgroundColor: '#F0F0F0', // Light background for placeholder
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogoImage: {
    width: '100%',
    height: '100%',
  },
  mainTitle: {
    fontSize: 28, // Adjusted for mobile
    fontWeight: 'bold',
    color: '#0056B3', // Darker blue, like Canara Bank
    textAlign: 'center',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16, // Adjusted for mobile
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300, // Limit width for better readability on large screens
  },
  middleSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  featureContainer: {
    width: '100%',
    maxWidth: 350, // Max width for feature points
    paddingHorizontal: 10,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align icon and text at the top
    marginBottom: 18, // Increased spacing between points
  },
  featureIcon: {
    marginRight: 15,
    marginTop: 2, // Adjust icon vertical alignment
  },
  featureText: {
    flex: 1, // Allow text to take remaining space
    fontSize: 15, // Adjusted for mobile
    color: '#333',
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFD700', // Gold/Yellow accent
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8, // Android shadow
    marginTop: 20, // Add some space above
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
