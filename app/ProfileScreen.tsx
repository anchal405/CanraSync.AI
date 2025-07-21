// app/ProfileScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';

const ProfileScreen = () => {
  // Renamed component from MoreScreen to ProfileScreen
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('My Profile');

  // Dummy User Data
  const userName = 'Sandhya Singh';
  const userEmail = 'sandhya.singh@example.com';
  const userPhone = '+91 98765 43210';
  const accountNumber = 'XXXX XXXX XXXX 9056';
  const ifscCode = 'CANARA000123';
  const branchName = 'Delhi Main Branch';

  const handleBack = () => {
    router.back();
  };

  const handleOptionPress = (optionName: string) => {
    Alert.alert('Functionality', `${optionName} functionality coming soon!`);
  };

  return (
    <View style={styles.fullScreenContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={handleBack}
          style={styles.headerIcon}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="#333"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Profile</Text>
        <View style={styles.headerIconPlaceholder} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Profile Header Section */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://placehold.co/100x100/E6F2FF/0056B3?text=SS&font=roboto&font-size=40&bold=true',
              }}
              style={styles.profileAvatar}
            />
            <TouchableOpacity
              style={styles.editProfileIcon}
              onPress={() => handleOptionPress('Edit Profile')}
            >
              <MaterialCommunityIcons
                name="pencil-circle"
                size={30}
                color="#0056B3"
                style={styles.editProfileIconShadow}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>{userName}</Text>
          <Text style={styles.profileTagline}>Your CanaraSync.AI Profile</Text>
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoItem}>
            <Ionicons
              name="mail-outline"
              size={22}
              color="#666"
              style={styles.infoIcon}
            />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Email Address</Text>
              <Text style={styles.infoValue}>{userEmail}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Ionicons
              name="call-outline"
              size={22}
              color="#666"
              style={styles.infoIcon}
            />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Phone Number</Text>
              <Text style={styles.infoValue}>{userPhone}</Text>
            </View>
          </View>
        </View>

        {/* Account Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Details</Text>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={22}
              color="#666"
              style={styles.infoIcon}
            />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Account Number</Text>
              <Text style={styles.infoValue}>{accountNumber}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <FontAwesome5
              name="code-branch"
              size={20}
              color="#666"
              style={styles.infoIcon}
            />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>IFSC Code</Text>
              <Text style={styles.infoValue}>{ifscCode}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Ionicons
              name="business-outline"
              size={22}
              color="#666"
              style={styles.infoIcon}
            />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Branch</Text>
              <Text style={styles.infoValue}>{branchName}</Text>
            </View>
          </View>
        </View>

        {/* Security & App Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security & App Settings</Text>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress('Change Password')}
          >
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="#0056B3"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Change Password</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress('Manage Biometrics')}
          >
            <Ionicons
              name="finger-print-outline"
              size={24}
              color="#0056B3"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Manage Biometrics</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
          {/* New option for Trusted Person Biometric */}
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress('Add Trusted Person Biometric')}
          >
            <Ionicons
              name="person-add-outline"
              size={24}
              color="#0056B3"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Add Trusted Person Biometric</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress('Privacy Policy')}
          >
            <Ionicons
              name="document-text-outline"
              size={24}
              color="#0056B3"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Privacy Policy</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionItem}
            onPress={() => handleOptionPress('Help & Support')}
          >
            <Ionicons
              name="help-circle-outline"
              size={24}
              color="#0056B3"
              style={styles.optionIcon}
            />
            <Text style={styles.optionText}>Help & Support</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() =>
            Alert.alert('Logout', 'Are you sure you want to log out?', [
              { text: 'Cancel' },
              { text: 'Logout', onPress: () => router.replace('/LoginScreen') },
            ])
          }
        >
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#D32F2F"
            style={styles.optionIcon}
          />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation Bar */}
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
          onPress={() => router.replace('/HistoryScreen')}
        >
          <MaterialCommunityIcons
            name={'history'}
            size={24}
            color={'#666'}
          />
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            router.replace('/QRScreen');
          }}
        >
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color={'#0056B3'}
          />
          <Text
            style={[styles.navText, { color: '#0056B3', fontWeight: 'bold' }]}
          >
            Scan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.replace('/CardsScreen')}
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
          onPress={() => {
            router.replace('/ProfileScreen');
          }}
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

export default ProfileScreen;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 40 : 50,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerIcon: {
    padding: 5,
  },
  headerIconPlaceholder: {
    width: 24 + 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#0056B3',
  },
  editProfileIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  editProfileIconShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileTagline: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0056B3',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoIcon: {
    marginRight: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginLeft: 10,
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
