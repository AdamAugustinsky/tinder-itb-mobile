import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import like from '../assets/like.png'
import dislike from '../assets/dislike.png'

export default function Footer() {
  return(
    <View style={styles.footer}>
      <TouchableOpacity>
        <Image style={styles.dislike} source={dislike}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image style={styles.like} source={like}/>
      </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
  like: {
    width: 64,
    height: 64,
  },
  dislike: {
    width:64,
    height:64,
    marginRight: '35%'
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 0
  }
});