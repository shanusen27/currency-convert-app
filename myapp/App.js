import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [lkrAmount, setLkrAmount] = useState('');
  const [usdAmount, setUsdAmount] = useState(null);

  const conversionRate = 0.003; // Example conversion rate

