// app/CardsScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  Alert,
  ColorValue,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface CardItemProps {
  bankName: string;
  balance: string;
  lastFourDigits: string;
  type: 'Visa' | 'Mastercard';
  gradientColors: readonly [ColorValue, ColorValue, ...ColorValue[]];
  logoUrl?: string;
}

const CardsScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Cards');

  const handleBack = () => {
    router.back();
  };

  const handleAddCard = () => {
    Alert.alert('Add New Card', 'Add New Card functionality coming soon!');
  };

  const CardItem = ({
    bankName,
    balance,
    lastFourDigits,
    type,
    gradientColors,
  }: CardItemProps) => (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.cardItem}
    >
      <Text style={styles.cardBankName}>{bankName}</Text>
      <Text style={styles.cardNumberDigits}>
        **** **** **** {lastFourDigits}
      </Text>
      <View style={styles.cardBottomRow}>
        <Text style={styles.cardBalance}>${balance}</Text>
        {type === 'Visa' && (
          <Image
            source={{
              uri: 'https://placehold.co/50x20/0056B3/FFFFFF?text=VISA&font=roboto&font-size=12&bold=true',
            }}
            style={styles.cardLogo}
            resizeMode="contain"
          />
        )}
        {type === 'Mastercard' && (
          <Image
            source={{
              uri: 'https://placehold.co/50x20/FFD700/000000?text=MC&font=roboto&font-size=12&bold=true',
            }}
            style={styles.cardLogo}
            resizeMode="contain"
          />
        )}
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.fullScreenContainer}>
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
        <Text style={styles.headerTitle}>My Cards</Text>
        <TouchableOpacity style={styles.headerIcon}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="#333"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        <CardItem
          bankName="CanaraSync"
          balance="5348.50"
          lastFourDigits="2026"
          type="Visa"
          gradientColors={['#FF8C00', '#FF4500'] as const}
        />

        <CardItem
          bankName="CanaraSync"
          balance="2187.30"
          lastFourDigits="6202"
          type="Mastercard"
          gradientColors={['#4682B4', '#8A2BE2'] as const}
        />

        <CardItem
          bankName="CanaraSync"
          balance="3490.00"
          lastFourDigits="0262"
          type="Visa"
          gradientColors={['#FF69B4', '#DA70D6'] as const}
        />

        <TouchableOpacity
          style={styles.addNewCardButton}
          onPress={handleAddCard}
        >
          <Ionicons
            name="add-circle-outline"
            size={30}
            color="#0056B3"
          />
          <Text style={styles.addNewCardText}>Add New Card</Text>
        </TouchableOpacity>
      </ScrollView>

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
            router.replace('/HistoryScreen');
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
            router.replace('/QRScreen');
          }}
        >
          {' '}
          {/* Updated navigation to QRScreen */}
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
            router.replace('/CardsScreen');
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
            router.replace('/ProfileScreen');
          }}
        >
          {' '}
          {/* Updated text and navigation to ProfileScreen */}
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
    </View>
  );
};

export default CardsScreen;

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
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 80,
  },
  cardItem: {
    width: width * 0.9,
    height: 180,
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  cardBankName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardNumberDigits: {
    fontSize: 16,
    color: '#fff',
    letterSpacing: 2,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardBalance: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardLogo: {
    width: 60,
    height: 25,
  },
  addNewCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: width * 0.9,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },
  addNewCardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0056B3',
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
