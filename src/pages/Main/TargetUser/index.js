import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function TargetUser() {
  const { user } = useRoute().params;


  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Text>{JSON.stringify(user)}</Text>
      <Image source={{ uri: user.images[0] }} style={{ width: 300, height: 300 }} />
    </View>
  );
}
