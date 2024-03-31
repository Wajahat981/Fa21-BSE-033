import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, ScrollView, StyleSheet } from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    if (isNaN(original) || isNaN(discount) || discount < 0 || discount > 100) {
      alert('Please enter valid inputs.');
      return;
    }
    const discountAmount = (original * discount) / 100;
    const finalPrice = original - discountAmount;
    const saveInfo = `${original} - ${discount}% = ${finalPrice.toFixed(2)}`;
    setHistory([...history, saveInfo]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Original Price"
          keyboardType="numeric"
          value={originalPrice}
          onChangeText={text => setOriginalPrice(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Discount Percentage"
          keyboardType="numeric"
          value={discountPercentage}
          onChangeText={text => setDiscountPercentage(text)}
        />
        <Button title="Calculate" onPress={calculateDiscount} />
        <Button title="View History" onPress={() => setModalVisible(true)} />
      </View>

      <Modal animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <ScrollView>
            {history.map((item, index) => (
              <Text key={index} style={styles.historyText}>{item}</Text>
            ))}
          </ScrollView>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
  },
  historyText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default DiscountCalculatorApp;
