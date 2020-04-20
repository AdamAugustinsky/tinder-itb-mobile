import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import like from '../../assets/like/heart.png';
import dislike from '../../assets/dislike/dislike.png';

export default function ActionButton({ type, onPress }) {
  const styles = StyleSheet.create({
    container: {
      width: 56,
      height: 56,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: type === 'like' ? '#40DD88' : '#FA5987',
      borderRadius: 56,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={type === 'like' ? like : dislike} />
    </TouchableOpacity>
  );
}
