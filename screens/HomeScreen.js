import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>MTG Library</Text>
      <Button title="Add a Card" onPress={() => navigation.navigate('Add Card')} />
    </View>
  );
}
