// app/HomeScreen.tsx
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TextInput,
  Platform,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import {
  PanGestureHandler,
  State,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'; // SafeAreaView को यहां import किया गया है

const { width } = Dimensions.get('window');

interface GestureEventData {
  timestamp: number;
  type: string;
  x: number;
  y: number;
}

interface ScrollOffsetData {
  lastOffset: number;
  lastTime: number;
}

const HomeScreen = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('Sandhya Singh');
  const [balance, setBalance] = useState('90,560');
  const [showBalance, setShowBalance] = useState(true); // New state to toggle balance visibility
  const [accountEnding, setAccountEnding] = useState('4567');
  const [activeTab, setActiveTab] = useState('Home');

  const gestureData = useRef<GestureEventData[]>([]);
  const scrollOffset = useRef<ScrollOffsetData>({ lastOffset: 0, lastTime: 0 });

  const onGestureEvent = (event: PanGestureHandlerGestureEvent) => {
    gestureData.current.push({
      timestamp: Date.now(),
      type: event.nativeEvent.state === State.ACTIVE ? 'pan' : 'tap',
      x: event.nativeEvent.x,
      y: event.nativeEvent.y,
    });
  };

  const onHandlerStateChange = (event: { nativeEvent: { state: State } }) => {
    if (event.nativeEvent.state === State.END) {
      gestureData.current = [];
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const time = Date.now();
    const timeDiff = time - scrollOffset.current.lastTime;
    const distance = Math.abs(currentOffset - scrollOffset.current.lastOffset);

    if (timeDiff > 0) {
      const speed = distance / timeDiff;
    }
    scrollOffset.current.lastOffset = currentOffset;
    scrollOffset.current.lastTime = time;
  };

  // Calculate header height dynamically for scrollView paddingTop
  const headerHeight =
    Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 70 : 90; // Approx fixed header height (paddingVertical 15*2 + icon size ~40 = 70)

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {' '}
      {/* Wrap with SafeAreaView */}
      {/* Status Bar background for Android to prevent overlap with system elements */}
      {Platform.OS === 'android' && (
        <StatusBar
          backgroundColor="#E6F2FF"
          barStyle="dark-content"
        />
      )}
      {/* Fixed Header Bar with Logo and CanaraSync.AI */}
      <View style={styles.fixedHeaderBar}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.headerIconBtn}>
            <Image
              source={require('../assets/placeholder.png')} // Path to your logo from app/HomeScreen.tsx
              style={styles.profileLogo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.canaraSyncTextLogo}>CanaraSync.AI</Text>
        </View>
        <TouchableOpacity style={styles.headerIconBtn}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView} // paddingTop handled by safeAreaContainer and fixedHeaderBar's absolute positioning
        contentContainerStyle={styles.scrollContainer}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <View style={styles.contentWrapper}>
            {' '}
            {/* Added a wrapper for scrollable content */}
            {/* Welcome Greeting */}
            <View style={styles.welcomeGreetingContainer}>
              <Text style={styles.welcomeGreetingText}>
                Welcome, {userName.split(' ')[0]}!
              </Text>
            </View>
            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
              <Ionicons
                name="search-outline"
                size={20}
                color="#666"
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search a service..."
                placeholderTextColor="#999"
              />
              <MaterialCommunityIcons
                name="microphone-outline"
                size={20}
                color="#666"
                style={styles.micIcon}
              />
            </View>
            {/* Navigation Tabs (Overview, Pay, Save, Invest) */}
            <View style={styles.navTabsContainer}>
              <TouchableOpacity style={styles.navTab}>
                <Text style={styles.navTabTextActive}>Overview</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navTab}>
                <Text style={styles.navTabText}>Pay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navTab}>
                <Text style={styles.navTabText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.navTab}>
                <Text style={styles.navTabText}>Invest</Text>
              </TouchableOpacity>
            </View>
            {/* Overview Section (Savings Account) */}
            <View style={styles.overviewCard}>
              <Text style={styles.overviewTitle}>Overview</Text>
              <Text style={styles.accountType}>Savings A/c</Text>
              <Text style={styles.accountNumberFull}>1234 5678 9000</Text>
              <View style={styles.balanceRow}>
                <Text style={styles.balanceAmountOverview}>
                  ₹{showBalance ? balance : '*******'}{' '}
                  {/* Toggle balance visibility */}
                </Text>
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowBalance(!showBalance)}
                >
                  <Ionicons
                    name={showBalance ? 'eye-outline' : 'eye-off-outline'}
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.balanceLabelOverview}>Available Balance</Text>
              <TouchableOpacity style={styles.viewAllAccountsButton}>
                <Text style={styles.viewAllAccountsText}>
                  View all accounts
                </Text>
              </TouchableOpacity>
            </View>
            {/* Services Section */}
            <View style={styles.servicesSection}>
              <Text style={styles.servicesTitle}>Services</Text>
              <View style={styles.servicesGrid}>
                <TouchableOpacity style={styles.serviceItem}>
                  <MaterialCommunityIcons
                    name="send-outline"
                    size={28}
                    color="#0056B3"
                  />
                  <Text style={styles.serviceText}>Money Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                  <MaterialCommunityIcons
                    name="currency-inr"
                    size={28}
                    color="#0056B3"
                  />
                  <Text style={styles.serviceText}>UPI Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                  <MaterialCommunityIcons
                    name="script-text-outline"
                    size={28}
                    color="#0056B3"
                  />
                  <Text style={styles.serviceText}>Bill Payments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                  <Ionicons
                    name="person-add-outline"
                    size={28}
                    color="#0056B3"
                  />
                  <Text style={styles.serviceText}>Add Payee</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceItem}>
                  <Ionicons
                    name="call-outline"
                    size={28}
                    color="#0056B3"
                  />
                  <Text style={styles.serviceText}>Recharge</Text>
                </TouchableOpacity>
                {/* Changed Scan QR to More */}
                <TouchableOpacity style={styles.serviceItem}>
                  <Ionicons
                    name="ellipsis-horizontal-circle-outline"
                    size={28}
                    color="#0056B3"
                  />{' '}
                  {/* Changed icon to a 'more' icon */}
                  <Text style={styles.serviceText}>More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </PanGestureHandler>
      </ScrollView>
      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveTab('Home');
            router.replace('/HomeScreen');
          }}
        >
          <Ionicons
            name={activeTab === 'Home' ? 'home' : 'home-outline'}
            size={24}
            color={activeTab === 'Home' ? '#0056B3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'Home' && styles.navTextActive,
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveTab('History');
            router.push('/HistoryScreen');
          }}
        >
          <MaterialCommunityIcons
            name={activeTab === 'History' ? 'history' : 'history'}
            size={24}
            color={activeTab === 'History' ? '#0056B3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'History' && styles.navTextActive,
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveTab('Scan');
            router.push('/QRScreen');
          }}
        >
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={30}
            color={activeTab === 'Scan' ? '#0056B3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'Scan' && styles.navTextActive,
            ]}
          >
            Scan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveTab('Cards');
            router.push('/CardsScreen');
          }}
        >
          <Ionicons
            name={activeTab === 'Cards' ? 'card' : 'card-outline'}
            size={24}
            color={activeTab === 'Cards' ? '#0056B3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'Cards' && styles.navTextActive,
            ]}
          >
            Cards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            setActiveTab('My Profile');
            router.push('/ProfileScreen');
          }}
        >
          <Ionicons
            name={activeTab === 'My Profile' ? 'person' : 'person-outline'}
            size={24}
            color={activeTab === 'My Profile' ? '#0056B3' : '#666'}
          />
          <Text
            style={[
              styles.navText,
              activeTab === 'My Profile' && styles.navTextActive,
            ]}
          >
            My Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeAreaContainer: {
    // New style for SafeAreaView
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  fullScreenContainer: {
    // This style is now redundant due to SafeAreaView, but keeping for reference
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  fixedHeaderBar: {
    // Fixed header bar style
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6F2FF', // Light blue background
    paddingHorizontal: 15, // Horizontal padding
    paddingVertical: 15, // Vertical padding
    paddingTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 10, // Dynamic padding for status bar
    position: 'absolute', // Make it fixed
    top: 0,
    left: 0,
    right: 0,
    shadowColor: '#000', // Shadow for depth
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
    zIndex: 10, // Ensure it stays on top of scrollable content
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  canaraSyncTextLogo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0056B3',
    marginLeft: 12,
  },
  headerIconBtn: {
    padding: 8,
  },
  profileLogo: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  scrollView: {
    flex: 1,
    // paddingTop will be handled by SafeAreaView and the contentWrapper's marginTop
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 250, // Increased paddingBottom to ensure content is not hidden by bottom nav and system buttons
  },
  container: {
    // This style is now redundant, contentWrapper is used instead
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  contentWrapper: {
    // Wrapper for the scrollable content
    paddingHorizontal: 20, // Apply horizontal padding here
    marginTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 70 : 90, // Add marginTop to push content below fixed header
  },
  welcomeGreetingContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 5,
    marginTop: 0, // Removed margin top to bring it closer to the header
  },
  welcomeGreetingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  micIcon: {
    marginLeft: 10,
  },
  navTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navTab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navTabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  navTabTextActive: {
    fontSize: 16,
    color: '#0056B3',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#0056B3',
  },
  overviewCard: {
    backgroundColor: '#0056B3',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  accountType: {
    fontSize: 16,
    color: '#E0E0E0',
    marginBottom: 5,
  },
  accountNumberFull: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  balanceAmountOverview: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  eyeIcon: {
    padding: 5,
  },
  balanceLabelOverview: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  viewAllAccountsButton: {
    alignSelf: 'flex-end',
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  viewAllAccountsText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  servicesSection: {
    marginBottom: 20,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  serviceItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 80) / 3,
    aspectRatio: 1,
    marginBottom: 15,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  serviceText: {
    fontSize: 12,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
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
