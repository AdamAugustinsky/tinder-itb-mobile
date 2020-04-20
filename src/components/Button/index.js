import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

export default function Button({ text, onPressed }) {
  return (
    <TouchableOpacity
      onPress={onPressed}
    >
      <LinearGradient
        colors={['#FFA16C', '#EC0264']}
        start={[0, 0.2]}
        end={[1, 0.8]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
