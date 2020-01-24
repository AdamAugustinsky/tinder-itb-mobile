import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import Like from '../assets/like.svg';
import Dislike from '../assets/dislike.svg';

export default function Footer() {
  return(
    <View style={styles.footer}>
      <TouchableOpacity style={styles.dislike}>
        <Dislike />

      </TouchableOpacity>

      <TouchableOpacity style={styles.dislike}>
        <Like />
      </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    bottom: 0,
    alignItems: 'center'
  },
  dislike: {
    left: '50%',
    marginLeft: '18%',
  }
});