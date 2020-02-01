import React from 'react';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';

import Like from '../assets/like.svg';
import Dislike from '../assets/dislike.svg';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    bottom: 0,
    alignItems: 'center',
  },
  dislike: {
    left: '50%',
    marginLeft: '18%',
  },
});

const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.dislike}>
      <Dislike />
    </TouchableOpacity>

    <TouchableOpacity style={styles.dislike}>
      <Like />
    </TouchableOpacity>
  </View>
);

export default Footer;
