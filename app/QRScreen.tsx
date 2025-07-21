// app/QRScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native'; // TextInput को यहां import किया गया है
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const QRScreen = () => {
  const router = useRouter();
  const [qrCodeData, setQrCodeData] = useState('canarasync.ai/scan/user123'); // Dummy QR code data

  // Calculate header height dynamically for scrollView paddingTop
  // This value should match the actual height of your fixedHeaderBar
  const headerHeight =
    Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 70 : 90; // Approx fixed header height (paddingVertical 15*2 + icon size ~40 = 70)

  return (
    <View style={styles.fullScreenContainer}>
      {/* Status Bar background for Android to prevent overlap with system elements */}
      {Platform.OS === 'android' && (
        <StatusBar
          backgroundColor="#E6F2FF"
          barStyle="dark-content"
        />
      )}

      {/* Fixed Header Bar */}
      <View style={styles.fixedHeaderBar}>
        <TouchableOpacity
          style={styles.headerIconBtn}
          onPress={() => router.back()}
        >
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color="#333"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My QR Code</Text>{' '}
        {/* Changed title as per image */}
        <TouchableOpacity style={styles.headerIconBtn}>
          <Ionicons
            name="help-circle-outline"
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={[styles.scrollView, { paddingTop: headerHeight }]} // Dynamic paddingTop based on header height
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.instructionText}>Receive Money via QR</Text>{' '}
          {/* Changed instruction text as per image */}
          {/* QR Code Display Area */}
          <View style={styles.qrCodeContainer}>
            {/* Placeholder for QR Code image */}
            <Image
              source={{
                uri: `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrCodeData}`,
              }}
              style={styles.qrCodeImage}
            />
            <Text style={styles.qrCodeLabel}>Scan to Pay</Text>{' '}
            {/* Changed label as per image */}
            {/* Removed qrCodeDetails as per image */}
          </View>
          {/* New input and button as per image */}
          {/* Wrapped TextInput in a View to ensure proper rendering and avoid potential warnings */}
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.canaraSyncPaymentInput}
              placeholder="CanaraSync.AI Payment"
              placeholderTextColor="#999"
              value="CanaraSync.AI Payment" // Pre-filled as per image
              editable={false} // Make it non-editable as per image
            />
          </View>
          <TouchableOpacity style={styles.generateQrButton}>
            <Text style={styles.generateQrButtonText}>Generate QR</Text>
          </TouchableOpacity>
          {/* Removed divider and additional info section as per image */}
          {/* Removed recent scans section as per image */}
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar (Assuming it's present on all main screens) */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/HomeScreen')}
        >
          <Ionicons
            name={'home-outline'}
            size={24}
            color={'#666'}
          />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/HistoryScreen')}
        >
          <MaterialCommunityIcons
            name={'history'}
            size={24}
            color={'#666'}
          />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color={'#0056B3'}
          />
          <Text style={[styles.navText, styles.navTextActive]}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/CardsScreen')}
        >
          <Ionicons
            name={'card-outline'}
            size={24}
            color={'#666'}
          />
          <Text style={styles.navText}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/ProfileScreen')}
        >
          <Ionicons
            name={'person-outline'}
            size={24}
            color={'#666'}
          />
          <Text style={styles.navText}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  fixedHeaderBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6F2FF',
    paddingHorizontal: 15,
    paddingVertical: 15,
    paddingTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
    zIndex: 10,
  },
  headerIconBtn: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0056B3',
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 400, // Increased padding to ensure content clears bottom nav and system buttons
  },
  contentWrapper: {
    paddingHorizontal: 20,
    marginTop: 0, // Removed marginTop to avoid extra gap, paddingTop of ScrollView handles spacing
  },
  instructionText: {
    fontSize: 18, // Increased font size
    fontWeight: 'bold', // Made bold
    color: '#0056B3', // Changed color to blue
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  qrCodeContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  qrCodeImage: {
    width: 250,
    height: 250,
    marginBottom: 15,
    borderRadius: 10,
  },
  qrCodeLabel: {
    fontSize: 18, // Increased font size
    fontWeight: 'bold', // Made bold
    color: '#333',
    marginBottom: 5,
  },
  qrCodeDetails: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  inputWrapper: {
    // New style for TextInput wrapper
    width: '100%',
    marginBottom: 20,
  },
  canaraSyncPaymentInput: {
    // New style for the input field
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    textAlign: 'center', // Center text as per image
    fontWeight: 'bold', // Bold text as per image
  },
  generateQrButton: {
    // New style for Generate QR button
    backgroundColor: '#0056B3', // Blue background
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30, // Space below button
  },
  generateQrButtonText: {
    // New style for Generate QR button text
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    width: '100%',
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust width for two buttons side-by-side
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    marginVertical: 20,
  },
  additionalInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  additionalInfoText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 30,
  },
  recentActivityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  recentActivityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  recentActivityText: {
    fontSize: 15,
    color: '#333',
  },
  recentActivityAmount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0056B3',
  },
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 70,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  navText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  navTextActive: {
    color: '#0056B3',
    fontWeight: 'bold',
  },
});
