// app/HistoryScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const HistoryScreen = () => {
  const router = useRouter();
  const userName = "Sandhya";
  const totalBalance = "90,560";
  const expenses = "600";
  const revenue = "9,000";
  const [activeTab, setActiveTab] = useState('History');

  const transactions = [
    { id: '1', icon: 'shopping-bag', name: 'Supermarkets', date: 'March 11, THU', amount: '-₹140', type: 'expense' },
    { id: '2', icon: 'heart-pulse', name: 'Health and beauty', date: 'March 11, THU', amount: '₹322', type: 'income' },
    { id: '3', icon: 'credit-card-refresh', name: 'Transfers from card', date: 'March 11, THU', amount: '₹427', type: 'income' },
    { id: '4', icon: 'silverware-fork-knife', name: 'Cafes and restaurants', date: 'March 11, THU', amount: '₹101', type: 'expense' },
    { id: '5', icon: 'dots-horizontal', name: 'The rest', date: 'March 11, THU', amount: '₹10', type: 'expense' },
    { id: '6', icon: 'car', name: 'Fuel', date: 'March 10, WED', amount: '-₹500', type: 'expense' },
    { id: '7', icon: 'gift', name: 'Bonus', date: 'March 10, WED', amount: '₹1000', type: 'income' },
  ];

  return (
    <View style={styles.fullScreenContainer}>
      <View style={styles.headerBackground}>
        <Text style={styles.headerTitle}>Financial Analysis</Text>
        <View style={styles.balanceSummary}>
          <MaterialCommunityIcons name="currency-inr" size={24} color="#fff" />
          <Text style={styles.balanceAmount}>{totalBalance}</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileCard}>
          <View style={styles.profileIconContainer}>
            <Ionicons name="person-outline" size={40} color="#0056B3" />
          </View>
          <Text style={styles.profileName}>{userName} Surname</Text>
          <View style={styles.expenseRevenueContainer}>
            <View style={styles.expenseRevenueItem}>
              <Text style={styles.expenseRevenueLabel}>Expenses</Text>
              <View style={styles.expenseRevenueValue}>
                <MaterialCommunityIcons name="currency-inr" size={18} color="#D32F2F" />
                <Text style={styles.expenseAmount}>{expenses}</Text>
              </View>
            </View>
            <View style={styles.verticalDivider} />
            <View style={styles.expenseRevenueItem}>
              <Text style={styles.expenseRevenueLabel}>Revenue</Text>
              <View style={styles.expenseRevenueValue}>
                <MaterialCommunityIcons name="currency-inr" size={18} color="#388E3C" />
                <Text style={styles.revenueAmount}>{revenue}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.historySection}>
          <Text style={styles.historyTitle}>History</Text>
          <Text style={styles.historyDate}>March 11, THU</Text>

          {transactions.map(transaction => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionIconContainer}>
                {transaction.icon === 'shopping-bag' && <FontAwesome5 name="shopping-bag" size={20} color="#333" />}
                {transaction.icon === 'heart-pulse' && <FontAwesome5 name="heartbeat" size={20} color="#333" />}
                {transaction.icon === 'credit-card-refresh' && <MaterialCommunityIcons name="credit-card-refresh-outline" size={20} color="#333" />}
                {transaction.icon === 'silverware-fork-knife' && <MaterialCommunityIcons name="silverware-fork-knife" size={20} color="#333" />}
                {transaction.icon === 'dots-horizontal' && <MaterialCommunityIcons name="dots-horizontal" size={20} color="#333" />}
                {transaction.icon === 'car' && <Ionicons name="car-outline" size={20} color="#333" />}
                {transaction.icon === 'gift' && <Ionicons name="gift-outline" size={20} color="#333" />}
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionName}>{transaction.name}</Text>
                <Text style={styles.transactionDateText}>{transaction.date}</Text>
              </View>
              <Text style={transaction.type === 'expense' ? styles.transactionAmountRed : styles.transactionAmountGreen}>
                {transaction.amount}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('Home'); router.replace('/HomeScreen'); }}>
          <Ionicons name={activeTab === 'Home' ? 'home' : 'home-outline'} size={24} color={activeTab === 'Home' ? '#0056B3' : '#666'} />
          <Text style={[styles.navText, activeTab === 'Home' && styles.navTextActive]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('History'); router.replace('/HistoryScreen'); }}>
          <MaterialCommunityIcons name={activeTab === 'History' ? 'history' : 'history'} size={24} color={activeTab === 'History' ? '#0056B3' : '#666'} />
          <Text style={[styles.navText, activeTab === 'History' && styles.navTextActive]}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('Scan'); router.replace('/QRScreen'); }}> {/* Updated navigation to QRScreen */}
          <MaterialCommunityIcons name="qrcode-scan" size={30} color={activeTab === 'Scan' ? '#0056B3' : '#666'} />
          <Text style={[styles.navText, activeTab === 'Scan' && styles.navTextActive]}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('Cards'); router.replace('/CardsScreen'); }}>
          <Ionicons name={activeTab === 'Cards' ? 'card' : 'card-outline'} size={24} color={activeTab === 'Cards' ? '#0056B3' : '#666'} />
          <Text style={[styles.navText, activeTab === 'Cards' && styles.navTextActive]}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => { setActiveTab('My Profile'); router.replace('/ProfileScreen'); }}> {/* Updated text and navigation to ProfileScreen */}
          <Ionicons name={activeTab === 'My Profile' ? 'person' : 'person-outline'} size={24} color={activeTab === 'My Profile' ? '#0056B3' : '#666'} />
          <Text style={[styles.navText, activeTab === 'My Profile' && styles.navTextActive]}>My Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerBackground: {
    backgroundColor: '#0056B3',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  balanceSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginTop: -40,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
  profileIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E6F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  expenseRevenueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 20,
  },
  expenseRevenueItem: {
    alignItems: 'center',
    flex: 1,
  },
  expenseRevenueLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  expenseRevenueValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginLeft: 5,
  },
  revenueAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C',
    marginLeft: 5,
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#eee',
    marginHorizontal: 15,
    height: '80%',
    alignSelf: 'center',
  },
  historySection: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  historyDate: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  transactionDateText: {
    fontSize: 12,
    color: '#888',
  },
  transactionAmountRed: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
  transactionAmountGreen: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388E3C',
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
