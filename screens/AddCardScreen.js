import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function AddCardScreen() {
  const [cardName, setCardName] = useState('');

  const handleAddCard = async () => {
    try {
      const response = await axios.post('http://129.158.40.104:5044/cards/add-by-name?name=' + encodeURIComponent(cardName));
      Alert.alert('Success', 'Card added successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to add card.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Enter card name:</Text>
      <TextInput
        style={{
          borderColor: '#ccc',
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
        }}
        value={cardName}
        onChangeText={setCardName}
        placeholder="e.g., Lightning Bolt"
      />
      <Button title="Add Card" onPress={handleAddCard} />
    </View>
  );
}
