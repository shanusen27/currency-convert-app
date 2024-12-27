import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [lkrAmount, setLkrAmount] = useState('');
  const [usdAmount, setUsdAmount] = useState(null);

  const conversionRate = 0.003; 

  const handleConvert = () => {
    const amount = parseFloat(lkrAmount);
    if (isNaN(amount) || amount <= 0) {
      Alert.alert('Invalid Input', 'Please enter a valid amount in LKR.');
      return;
    }
    const convertedAmount = (amount * conversionRate).toFixed(2);
    setUsdAmount(convertedAmount);
  };


