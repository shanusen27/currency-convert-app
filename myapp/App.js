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

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LKR to USD Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in LKR"
        keyboardType="numeric"
        value={lkrAmount}
        onChangeText={setLkrAmount}
      />
      <Button title="Convert" onPress={handleConvert} />
      {usdAmount && (
        <Text style={styles.result}>USD: ${usdAmount}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e6fa',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00008b', 
    textDecorationLine: 'underline', 
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#00008b', 
    fontWeight: 'bold',
  },
});


